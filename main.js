/* Gaspar Lukacs 2022 */
/*jshint esversion: 6 */

// this variable serves here to easily set the starting div for testing
let start_page = 'start'; // default: start; demos fingercounting snarc cdq_1 dataqualitycheck
const allimages = ['bike_leftward.jpeg',
    'bike_rightward.jpeg',
    'fruit_1_apple.jpeg',
    'fruit_2_banana.jpeg',
    'fruit_3_orange.jpeg',
    'fruit_4_pear.jpeg',
    'give_left.jpeg',
    'give_right.jpeg',
    'orange_1.jpeg',
    'orange_2.jpeg',
    'orange_3.jpeg'];

const subject_id =
    rchoice("CDFGHJKLMNPQRSTVWXZ") +
    rchoice("AEIOUY") +
    rchoice("CDFGHJKLMNPQRSTVWXZ") +
    rchoice("AEIOUYCDFGHJKLMNPQRSTVWXZ") + '_' + neat_date(),
    file_name =
        'numcog_cc_' +
        subject_id +
        ".txt",
    misc = {
        subject_id: subject_id,
        userid: "NA",
        cdq_scores: {}
    };
let current_task,
    which_half = 'first',
    demo = false;

const task_type = {
    'first': {},
    'second': {}
};
Object.seal(task_type);

document.addEventListener("DOMContentLoaded", function() {
    // check relevant browser compatibility
    try {
        const sum = function(x, y, z) {
            return x + y + z;
        };
        const numbers = [1, 2, 3];
        if (typeof fetch !== 'function' || sum(...numbers) !== 6) {
            return;
        }
    } catch (e) {
        if (e.name == "ReferenceError") {
            return;
        }
    }
    misc.user_agent = navigator.userAgent;
    misc.unload_attempt = 0;
    misc.screen_h = screen.height;
    misc.screen_w = screen.width;
    misc.browser_name = jscd.browser;
    misc.browser_version = jscd.browserVersion;
    misc.os_name = jscd.os;
    misc.os_version = jscd.osVersion;

    misc.first_task = (Math.random() < 0.5) ? 'parity' : 'magnitude';
    current_task = misc.first_task;

    misc.first_cond = (Math.random() < 0.5) ? 'congruent' : 'incongr';

    check_params();
    load_language();
    if (demo) {
        document.getElementById('demo_info').style.display = 'block';
    }

});

const assign_task_type = function() {
    let type1, type2;
    if (current_task === 'parity') {
        tt.block_text = tt.block_text_par;
        type1 = 'even';
        type2 = 'odd';
    } else {
        type1 = 'large';
        type2 = 'small';
        tt.block_text = tt.block_text_mag;
    }

    // Incongruent -> block A / block 0 (D = even / large, K = odd / small)
    // Congruent -> block B / block 1 (D = odd / small, K = even / large)
    const A = {
        d: type1, // even / large
        k: type2 // odd / small
    },
        B = {
            d: type2, // odd / small
            k: type1 // even / large
        };
    if (misc.first_cond === 'incongr') {
        task_type.first = A;
        task_type.second = B;
    } else {
        task_type.first = B;
        task_type.second = A;
    }
};

// load language based on query
const load_language = function() {
    // load texts in the given language [15#]
    const l1_script = document.createElement('script');
    l1_script.onload = function() {
        // when the language file is loaded, modify as needed and add to HTML

        assign_task_type();

        // insert texts of the chosen language into HTML [#16]
        Object.keys(tt).forEach((id) => {
            if (id.startsWith('class_')) {
                [...document.getElementsByClassName(id)].forEach((elem) => {
                    elem.innerHTML = tt[id];
                });
            } else {
                const elem = document.getElementById(id);
                if (elem) {
                    elem.innerHTML = tt[id];
                }
            }
        });
        // adjust and display texts
        document.getElementById('pass_id').textContent = misc.subject_id;
        if (misc.userid === null || misc.userid.length < 2) {
            misc.userid = "na";
        } else if (tt.prolific_link) {
            document.getElementById('pass_container').innerHTML = tt.prolific_link;
        }

        for (x = 0; x < document.getElementsByTagName('input').length; x++) {
            const inp_el = document.getElementsByTagName('input').item(x);
            if (inp_el.type === 'checkbox' && inp_el.id.slice(0, 3) === 'l2_' &&
                inp_el.id !== 'l2_na') {
                append_l2use(inp_el);
                inp_el.onclick = l2_use;
            }
        }

        let to_hide;
        if (['tr', 'fa'].includes(misc.lg)) {
            to_hide = 'only_de';
            if (misc.lg === 'fa') {
                document.body.style.direction = 'rtl';
            }
        } else {
            to_hide = 'only_east';
            // only_tr
            // only_fa
        }

        [...document.getElementsByClassName(to_hide)].forEach((elem) => {
            elem.style.display = 'none';
        });

        switch_page('init_fail', start_page, 0, false); // default: start followup snarc

        misc.speed_empty_0 = speed.empty();
        misc.speed_pow_0 = speed.pow();


        DT.preload(allimages.map(img => './media/' + img))
            .then(function() {
                for (const ikey in DT.images) {
                    DT.images[ikey].classList.add("img");
                    const base_name = ikey.replace('./media/', '').replace('.jpeg', '');
                    DT.images[ikey].id = base_name;
                    if (['orange_1', 'orange_2', 'orange_3'].includes(base_name)) {
                        DT.images[ikey].draggable = true;
                        DT.images[ikey].ondragstart = drag;
                    }
                    document.getElementById(base_name + '_div').appendChild(DT.images[ikey]);
                }
                console.log('Preloaded images.');
                document.getElementById('submit_button').style.visibility = 'visible';
                pic_selection(bikes);
                pic_selection(gives);
            })
            .catch(function(err) {
                console.error('Failed', err);
                alert('Failed to load images! Try reloading the page or contact lkcsgaspar@gmail.com');
            });
    };
    // if the specified language file not found, default to English [15#]
    l1_script.onerror = function() {
        misc.lg = 'en';
        console.log('Language defaults to English.');
        load_language();
    };
    l1_script.src = './langs/lg_' + misc.lg + '.js';
    document.head.appendChild(l1_script);
};

const append_l2use = function(inp_el) {
    const l2_div = document.createElement('div');
    l2_div.innerHTML = tt.l2_use;
    l2_div.id = 'l2use' + inp_el.id;
    const l2_use_time = 'l2use_time' + inp_el.id;
    l2_div.querySelector('#l2_use_time').id = l2_use_time;
    inp_el.nextElementSibling.insertAdjacentElement("afterend", l2_div);

    [...l2_div.querySelectorAll('input')].forEach(l2use_input => {
        l2use_input.id = l2use_input.id + inp_el.id.slice(2, 5);
        if (l2use_input.type === 'radio') {
            l2use_input.nextElementSibling.setAttribute("for", l2use_input.id);
            l2use_input.name = l2use_input.name + inp_el.id.slice(2, 5);
            l2use_input.onclick = function() {
                if (get_radio(l2use_input.name) === 'l2_use1') {
                    document.getElementById(l2_use_time).style.display = 'none';
                } else {
                    document.getElementById(l2_use_time).style.display = 'block';
                }
            };
        }
    });
    l2_div.style.display = 'none';
};

const l2_use = function() {
    const plus_id = 'l2use' + this.id;
    if (this.checked) {
        document.getElementById(plus_id).style.display = 'block';
    } else {
        document.getElementById(plus_id).style.display = 'none';
    }
};

const check_params = function() {
    const params = new URLSearchParams(location.search);
    const l1_param = params.get('lg');
    if (['de', 'tr', 'fa'].includes(l1_param)) {
        misc.lg = l1_param;
    } else {
        misc.lg = 'en';
    }

    if (params.get('demo') !== null) {
        demo = true;
    }

    const page = params.get('p');
    if (document.getElementById(page) && document.getElementById(page).classList.contains('page')) {
        start_page = page;
    }

    misc.userid = params.get('PROLIFIC_PID');
};

const consented = function() {
    misc.seriousness = get_radio('seriousness');
    if ((!demo) && (!misc.seriousness)) {
        alert(tt.unanswered);
        return;
    }
    document.getElementById('start').style.display = 'none';
    if (is_mobile()) {
        switch_page('start', 'mobile');
    } else if (small_screen()) {
        switch_page('start', 'screen');
    } else {
        switch_page('start', 'demos');
        set_screen();
    }
};

const ignore_mobile = function(e) {
    switch_page('mobile', 'demos');
    set_screen();
};

const set_screen = function() {
    reset_scale();
    keep_scale();
    keep_state();
    fullscreen_on();
    fullscreen_change(() => {
        // If the user enters full screen mode, the warning message is hidden
        document.getElementById('warning').style.height = '0';
    }, () => {
        // If the user leaves full screen mode, the warning message is shown
        document.getElementById('warning').style.height = 'auto';
    });
};

const checkageconsent = function(e) {
    const age = document.getElementById("age_id");
    if (e.target.checked == true) {
        age.value = "";
        age.disabled = true;
    } else {
        age.disabled = false;
    }
};

const checkbox_group = function(ids) {
    let is_checked = false;
    ids.forEach((item) => {
        misc[item] = document.getElementById(item).checked;
        if (misc[item]) {
            is_checked = true;
        }
    });
    return is_checked;
};


const demos_submitted = function() {
    misc.gender = get_radio('gender');
    misc.age = document.getElementById("age_id").value;
    misc.age_na = document.getElementById("age_na").checked;
    ['l1_notes', 'l2_notes', 'loc_notes', 'loc2_notes'].forEach(el_id => {
        misc[el_id] = document.getElementById(el_id).value;
    });
    is_lang = checkbox_group([
        'l1_de',
        'l1_tr',
        'l1_fa',
        'l1_na'
    ]);
    is_lang2 = checkbox_group([
        'l2_de',
        'l2_tr',
        'l2_fa',
        'l2_en',
        'l2_es',
        'l2_fr',
        'l2_it',
        'l2_ar',
        'l2_na'
    ]);
    misc.country_current = get_radio('loc');
    misc.country_lived = get_radio('loc2');
    misc.handedness = get_radio('handedness');
    misc.culture = get_radio('cultur');

    if (demo || (misc.gender && (misc.age || misc.age_na) && is_lang
        && misc.country_current && misc.country_lived && misc.handedness && misc.culture)) {

        [...document.querySelectorAll('input')].forEach(user_input => {
            if (user_input.id.startsWith('l2_use') && (user_input.parentElement.style.display === 'block' || user_input.value)) {
                if (user_input.type === 'radio') {
                    if (get_radio(user_input.name)) {
                        misc[user_input.name] = get_radio(user_input.name);
                        console.log(misc[user_input.name]);
                    }
                } else {
                    if (user_input.value) {
                        misc[user_input.id] = user_input.value;
                        console.log(misc[user_input.id]);
                    }
                }
            }
        });

        switch_page('demos', 'snarc');
        document.body.style.backgroundColor = "rgb(150, 150, 150)";
    } else {
        alert(tt.unanswered);
    }
};

const show_again = function(elem) {
    switch_page(elem.parentNode.id, elem.parentNode.id.slice(0, -1) + '1');
};


const bikes = ['bike_leftward', 'bike_rightward', 'bike_na_div'];
const gives = ['give_left', 'give_right', 'give_na_div'];

const pic_selection = function(ids) {
    ids.forEach((item) => {
        const elem = document.getElementById(item);
        elem.onclick = function() {
            ids.forEach(item => {
                const elem2 = document.getElementById(item);
                elem2.classList.remove('pic_selected');
            });
            elem.classList.add('pic_selected');
        };
    });
};

const move_down = function(id) {
    const element = document.getElementById(id);
    element.parentNode.insertBefore(element.nextElementSibling, element);
};

const prep_cdq = function() {
    // decide on CDQ version
    misc.cdq_version = (Math.random() < 0.5) ? 'v1' : 'v2';
    cdq_pages = misc.cdq_version === 'v1' ? ['cdq_3', 'cdq_4', 'cdq_5', 'cdq_6', 'cdq_7'] :
        ['cdq_4', 'cdq_3', 'cdq_6', 'cdq_5', 'cdq_7'];

    misc.cdq_order_changes = {};
    ['bike_rightward_div', 'cdq_4_top', 'give_right_div', 'cdq_6_top', 'cdq_7_top', 'cdq_8_top'].forEach((id, i) => {
        if (Math.random() < 0.5) {
            misc.cdq_order_changes['cdq' + (i + 3)] = true;
            move_down(id);
        } else {
            misc.cdq_order_changes['cdq' + (i + 3)] = false;
        }
    });
};

const cdq_switcher = function(el) {
    const arrow_elem = el.firstElementChild;
    const page_id = el.parentNode.parentNode.id;
    console.log(arrow_elem);
    if (arrow_elem.classList.contains('switch_up')) {
        arrow_elem.classList.remove('switch_up');
        change_class(document.getElementById(page_id + '_1'), 'collapse', 'expand');
        change_class(document.getElementById(page_id + '_2'), 'expand', 'collapse');
    } else {
        arrow_elem.classList.add('switch_up');
        change_class(document.getElementById(page_id + '_1'), 'expand', 'collapse');
        change_class(document.getElementById(page_id + '_2'), 'collapse', 'expand');
    }
};

const change_class = function(el, remove, add) {
    el.classList.remove(remove);
    el.classList.add(add);
};


let cdq_pages;
let cdq1_clicked_once = false;
const cdq1_submit = function() {
    let fruits = tt.fruits;
    const guesses = [];
    [
        "text1",
        "text2",
        "text3",
        "text4"
    ].forEach(text_id => {
        misc['cdq1_' + text_id] = document.getElementById(text_id).value;
        // strip text & to lowercase
        const text_a = document.getElementById(text_id).value
            .toLowerCase().replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ");
        let matches = {};
        fruits.forEach(frut => {
            const simil = similar_text(text_a, frut);
            matches[simil] = frut;
        });
        const the_max = Math.max.apply(Math, Object.keys(matches));
        if (the_max > 80) {
            guesses.push(matches[the_max]);
            misc['cdq1_' + text_id + '_guess'] = matches[the_max];
            misc['cdq1_' + text_id + '_simil'] = ro(the_max);
        }
    });
    if (demo || cdq1_clicked_once || guesses.slice().sort().join('') === fruits.slice().sort().join('')) {
        let score1;
        if (guesses.join('') === fruits.join('')) {
            score1 = -1;
        } else if (guesses.join('') === fruits.slice().reverse().join('')) {
            score1 = 1;
        } else {
            score1 = 0;
        }
        misc.cdq_scores.cdq_1 = score1;
        switch_page('cdq_1', 'cdq_2');
        prep_cdq();
    } else {
        cdq1_clicked_once = true;
        alert(tt.cdq1_unanswered);
    }
};

const cdq2_submit = function() {
    const oranges = [];
    ['orange_1_targ', 'orange_2_targ', 'orange_3_targ'].forEach(targ_div => {
        const o_child = document.getElementById(targ_div).children[0];
        if (o_child) {
            oranges.push(o_child.id);
        }
    });
    if (demo || oranges.length === 3) {
        let score2;
        if (oranges.join('') === oranges.slice().sort().join('')) {
            score2 = -1;
        } else if (oranges.join('') === oranges.slice().sort().reverse().join('')) {
            score2 = 1;
        } else {
            score2 = 0;
        }
        misc.cdq_scores.cdq_2 = score2;
        misc.cdq2_order = oranges.join('|');
        switch_page('cdq_2', cdq_pages.shift());
    } else {
        alert(tt.cdq2_unanswered);
    }
};

const cdq3_submit = function() {
    misc.cdq3_choice = bikes.find(targ_id =>
        document.getElementById(targ_id).classList.contains('pic_selected'));
    if (demo || misc.cdq3_choice) {
        misc.cdq_scores.cdq_3 = misc.cdq3_choice === 'bike_leftward' ? -1 :
            (misc.cdq3_choice === 'bike_rightward' ? 1 : 0);
        switch_page('cdq_3', cdq_pages.shift());
    } else {
        alert(tt.cdq_opt_unanswered);
    }
};

const cdq4_submit = function() {
    misc.cdq4_choice = get_radio('bike_draw');
    if (demo || misc.cdq4_choice) {
        misc.cdq_scores.cdq_4 = misc.cdq4_choice === 'bike_draw_left' ? -1 :
            (misc.cdq4_choice === 'bike_draw_right' ? 1 : 0);
        switch_page('cdq_4', cdq_pages.shift());
    } else {
        alert(tt.cdq_opt_unanswered);
    }
};

const cdq5_submit = function() {
    misc.cdq5_choice = gives.find(targ_id =>
        document.getElementById(targ_id).classList.contains('pic_selected'));
    if (demo || misc.cdq5_choice) {
        misc.cdq_scores.cdq_5 = misc.cdq5_choice === 'give_right' ? -1 :
            (misc.cdq5_choice === 'give_left' ? 1 : 0);
        switch_page('cdq_5', cdq_pages.shift());
    } else {
        alert(tt.cdq_opt_unanswered);
    }
};

const cdq6_submit = function() {
    misc.cdq6_choice = get_radio('give_draw');
    if (demo || misc.cdq6_choice) {
        misc.cdq_scores.cdq_6 = misc.cdq6_choice === 'give_draw_right' ? -1 :
            (misc.cdq6_choice === 'give_draw_left' ? 1 : 0);
        switch_page('cdq_6', cdq_pages.shift());
    } else {
        alert(tt.cdq_opt_unanswered);
    }
};

const cdq7_submit = function() {
    misc.cdq7_choice = get_radio('line_draw');
    if (demo || misc.cdq7_choice) {
        misc.cdq_scores.cdq_7 = misc.cdq7_choice === 'line_draw_right' ? -1 :
            (misc.cdq7_choice === 'line_draw_left' ? 1 : 0);
        misc.cdq_score_total = Object.values(misc.cdq_scores).reduce((a, b) => a + b);
        switch_page('cdq_7', 'cdq_8');
    } else {
        alert(tt.cdq_opt_unanswered);
    }
};

const cdq8_submit = function() {
    misc.cdq8_choice = get_radio('moral_dir');
    if (demo || misc.cdq8_choice) {
        misc.cdq_scores.cdq_8 = misc.cdq8_choice === 'moral_dir_right' ? -1 :
            (misc.cdq8_choice === 'moral_dir_left' ? 1 : 0);
        switch_page('cdq_8', 'fingercounting');
    } else {
        alert(tt.cdq_opt_unanswered);
    }
};

const finger_submit = function() {
    misc.fingercountinghabits = get_radio('fingercountinghabits');
    misc.fingercountingstability = get_radio('fingercountingstability');

    if (demo || (misc.fingercountinghabits && misc.fingercountingstability)) {
        switch_page('fingercounting', 'dataqualitycheck');
        DT.getSamples(fun = () => {
            misc.raf_interval = DT.interval;
            misc.raf_samples = DT.samples;
        });
    } else {
        alert(tt.unanswered);
    }
};

// ending
const end_exp = function() {
    misc.environment = get_radio('environment');
    misc.distractions = get_radio('distractions');
    misc.difficulties = get_radio('difficulties');
    misc.difficulties_notes = document.getElementById("difficulties_notes").value;
    if (demo || (misc.environment &&
        misc.distractions &&
        misc.difficulties)) {
        fullscreen_off();
        switch_page('dataqualitycheck', 'ending');
        upload_final();
    } else {
        alert(tt.unanswered);
    }
};

const prep_file = function(type) {
    misc.page_times = Object.keys(page_switches).map(function(key) {
        return (key + '_' + Math.round(page_switches[key]));
    }).join('|');
    misc.full_dur = Math.round((DT.now() - Object.values(page_switches)[0]) / 600) / 100;
    return (subject_results + JSON.stringify(misc));
};

const dl_as_file = function() {
    subject_results_merged = prep_file();
    const blobx = new Blob([subject_results_merged], {
        type: 'text/plain'
    });
    const elemx = window.document.createElement('a');
    elemx.href = window.URL.createObjectURL(blobx);
    elemx.download = file_name;
    document.body.appendChild(elemx);
    elemx.click();
    document.body.removeChild(elemx);
    window.onbeforeunload = null;
};

const upload_interim = function() {
    if (demo) {
        return;
    }
    fetch('./store_partial.php', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'text/plain'
        },
        body: JSON.stringify({
            fname_post: file_name,
            results_post: prep_file()
        })
    });

    // .then(response => response.text())
    // .then(echoed => {
    //     console.log(echoed);
    // })
    // .catch((error) => {
    //     console.log(error);
    // });
};

const upload_final = function() {
    document.getElementById("retry_button").disabled = true;
    if (demo) {
        window.onbeforeunload = null;
        return;
    }
    if (misc.userid !== "na") {
        document.getElementById('pass_id').innerHTML += spinner_content;
    }
    document.documentElement.style.cursor = 'wait';
    fetch('./store_main.php', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'text/plain'
        },
        body: JSON.stringify({
            fname_post: file_name,
            results_post: prep_file()
        })
    })
        .then(response => response.text())
        .then(echoed => {
            console.log(echoed);
            document.documentElement.style.cursor = 'auto';
            if (echoed.startsWith("http")) {
                document.getElementById('save_fail').style.display = 'none';
                document.getElementById('save_success').style.display = 'block';
                window.onbeforeunload = null;
                if (misc.userid !== "na") {
                    document.getElementById('pass_id').innerHTML = '<a href="' + echoed + '" target="_blank">' + echoed + '</a>';
                }
            } else {
                upload_fail();
                if (misc.userid !== "na") {
                    document.getElementById('pass_id').innerHTML = echoed;
                }
            }
        })
        .catch((error) => {
            console.log('Request failed: ', error);
            document.documentElement.style.cursor = 'auto';
            upload_fail();
            if (misc.userid !== "na") {
                document.getElementById('pass_id').innerHTML = 'Server connection failed! ' + error;
            }
        });
};

const upload_fail = function() {
    document.getElementById("retry_button").disabled = false;
    document.getElementById('retry_spin').innerHTML = '';
    document.getElementById('save_fail').style.display = 'block';
    document.getElementById('save_success').style.background = '#1aff1a';
};
