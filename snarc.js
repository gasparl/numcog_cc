/* Gaspar Lukacs 2022 */
/*jshint esversion: 6 */

const keys = {
    d: 'd',
    k: 'k'
};
Object.seal(keys);

// set numbers to be used
const num_stimuli = [1, 2, 3, 4, 6, 7, 8, 9];
const nums_persian = { 1: '١', 2: '۲', 3: '۳', 4: '۴', 6: '۶', 7: '۷', 8: '۸', 9: '۹' };

let total_trialcount = 0,
    trial_number = 0,
    block_number = 0,
    phase = 'practice',
    block_items,
    item_x,
    trial_phase1, trial_phase2, set_next;

let subject_results = [
    'subject_id', 'phase', 'block', 'trial', 'digit', 'digit_text', 'magnitude', 'parity', 'snarc', 'marc', 'display_square', 'display_digit', 'display_digit_noraf', 'display_digit_now', 'response_key', 'correct', 'keydown', 'keydown_now', 'keyup', 'trusted', 'w_width', 'w_height', 'fulls'
].join("\t") + "\n";

const store_response = function() {
    document.getElementById('stimulus').textContent = '';
    document.getElementById('stimulus').className = '';
    document.getElementById('stimulus').style.display = 'none';

    setTimeout(() => {
        subject_results += [
            subject_id, phase, block_number, trial_number, item_x.digit, item_x.digit_text, item_x.magn, item_x.parity, item_x.snarc, item_x.marc, ro(item_x.disp_square), ro(item_x.disp_digit), ro(item_x.disp_digit_noraf), ro(item_x.disp_digit_now), item_x.response_key, item_x.correct, ro(item_x.keydown_time), ro(item_x.keydown_time_now), ro(item_x.keyup_time), item_x.trust, item_x.s_width, item_x.s_height, item_x.fullscreen
        ].join("\t") + "\n";
        // if (trial_number % 10 === 1) {
        //     upload_interim();
        // }
        upload_interim();
        next_trial();
    }, 200); // this is just to wait for potential keyup
};

const leftButton = function() {
    document.getElementById("leftButton").style.backgroundColor = '#992200';
    document.getElementById("rightButton").disabled = true;
    document.getElementById("completeButton").disabled = true;
    change_key('d'); // this function changes the keycode for D
};
const rightButton = function() {
    document.getElementById("rightButton").style.backgroundColor = '#992200';
    document.getElementById("leftButton").disabled = true;
    document.getElementById("completeButton").disabled = true;
    change_key('k'); // this function changes the keycode for K
};
const changeButton = function() {
    set_keys();
    switch_page('exp_start', 'change');
};
const completeButton = function() {
    set_keys();
    switch_page('change', 'exp_start');
};
const startButton = function() {
    fullscreen_on(); // Initializes the full screen mode
    document.getElementById('exp_start').style.display = 'none';
    next_block();
};

const set_keys = function() {
    [...document.getElementsByClassName('key_d')].forEach((elem) => {
        elem.textContent = keys.d.toUpperCase();
    });
    [...document.getElementsByClassName('key_k')].forEach((elem) => {
        elem.textContent = keys.k.toUpperCase();
    });
};
const set_task_type = function() {
    let type1, type2;
    const nums_dict = {};
    if (current_task === 'parity') {
        type1 = tt.even;
        type2 = tt.odd;
        nums_dict['even'] = type1 + ' (' + num_stimuli.filter(n => n % 2 === 0).join(', ') + ')';
        nums_dict['odd'] = type2 + ' (' + num_stimuli.filter(n => n % 2 !== 0).join(', ') + ')';
        document.getElementById('keystroke').innerHTML = tt.keystroke_par;
    } else {
        type1 = tt.large;
        type2 = tt.small;
        nums_dict['large'] = type1 + ' (' + num_stimuli.filter(n => n > 5).join(', ') + ')';
        nums_dict['small'] = type2 + ' (' + num_stimuli.filter(n => n < 5).join(', ') + ')';
        document.getElementById('keystroke').innerHTML = tt.keystroke_mag;
    }

    [...document.getElementsByClassName('nums_d_sh')].forEach((elem) => {
        elem.textContent = capitalize(nums_dict[task_type[which_half].d]);
    });
    [...document.getElementsByClassName('nums_k_sh')].forEach((elem) => {
        elem.textContent = capitalize(nums_dict[task_type[which_half].k]);
    });

    [...document.getElementsByClassName('nums_d')].forEach((elem) => {
        elem.textContent = nums_dict[task_type[which_half].d];
    });
    [...document.getElementsByClassName('nums_k')].forEach((elem) => {
        elem.textContent = nums_dict[task_type[which_half].k];
    });
    [...document.getElementsByClassName('num_stimuli')].forEach((elem) => {
        elem.textContent = num_stimuli.join(', ');
    });
};

const change_key = function(d_or_k) {
    document.onkeydown = function(event) {
        if (event.key) { // If the key is pressed
            if (['ScrollLock', '+', '-', 'BracketLeft', 'BracketRight', 'Shift', 'CapsLock',
                'Backslash', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'PageUp', 'PageDown',
                'End', 'Home', 'Pause', 'Alt', 'Insert', 'NumLock', 'OS', 'ContextMenu', 'Tab',
                'Enter', 'Escape', ' ', 'Backspace', 'Delete', '1', '2', '3', '4', '5', '6', '7',
                '8', '9', '0', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10',
                'F11', 'F12'].indexOf(event.key) === -1) { // If the key is not a special key

                keys[d_or_k] = event.key.toLowerCase();
                misc['overridden_' + d_or_k + '_key'] = event.key.toLowerCase();
                document.onkeydown = null;
                set_keys();

                document.getElementById("leftButton").style.backgroundColor = '';
                document.getElementById("rightButton").style.backgroundColor = '';
                document.getElementById("leftButton").disabled = false;
                document.getElementById("rightButton").disabled = false;
                document.getElementById("completeButton").disabled = false;
            } else {
                alert(tt.irregular_key);
            }
        }
    };
};

const generate_items = function() {
    const range_mean = mean(num_stimuli);
    const new_items = [];
    let num_reps = phase == 'practice' ? 1 : 20;
    if (demo) {
        num_reps = 1;
    }
    for (let ix = 0; ix < num_reps; ix++) {
        num_stimuli.forEach(num => {
            new_items.push({
                digit: num,
                digit_text: misc.lg === 'fa' ? nums_persian[num] : num,
                parity: num % 2 == 0 ? 'even' : 'odd',
                magn: num < range_mean ? 'small' : 'large'
            });
        });
    }
    return (shuffle(new_items));
};

// The function controls key presses to start/continue the experiment. The expected key depends on the block
const start_block = function() {
    //Hiding the help (if shown)
    document.getElementById('help').style.display = 'none';
    document.body.style.backgroundColor = "rgb(150, 150, 150)";
    document.getElementById('description').innerHTML =
        tt.block_text.shift();
    document.getElementById('description').style.display = 'block';
    set_keys();
    set_task_type();
    setTimeout(() => {
        document.onkeydown = function(event) {
            if ((event.key.toLowerCase() == keys.d || event.key.toLowerCase() == keys.k)) {
                fullscreen_on();
                document.body.style.backgroundColor = "rgb(150, 150, 150)";
                document.onkeydown = null; // Stop listening for the keypress
                document.getElementById('description').textContent = '';
                document.getElementById('description').style.display = 'none';
                document.getElementById('stimulus').style.display = 'none';
                if (phase === 'practice') {
                    //Showing the help
                    document.getElementById('help').style.display = 'block';
                }
                DT.loopOn();
                next_trial(); //Starting the next iteration
            }
        };
    }, 1000); // this little delay is just to prevent accidentally moving on
};

const next_block = function() {
    block_number++;
    trial_number = 0;
    if (block_number > 1 && block_number % 2 !== 0) {
        which_half = which_half === 'second' ? 'first' : 'second';
    }
    if (block_number == 5) {
        current_task = misc.first_task === 'magnitude' ? 'parity' : 'magnitude';
        assign_task_type();
    }
    if (block_number % 2 === 0) { // if even
        phase = 'main';
        block_items = generate_items();
    } else {
        phase = 'practice';
        block_items = generate_items();
    }
    if (block_number > 8) {
        setTimeout(function() {
            switch_page('snarc', 'cdq_1');
            document.body.style.backgroundColor = "";
        }, 1000);
    } else if (block_number > 1 && block_number % 2 !== 0) {
        do_break();
    } else {
        start_block();
    }
};

const phase_texts = [];

const do_break = function() {
    document.getElementById('description').style.display = 'block';
    document.getElementById('description').innerHTML = tt.mid_break.shift();
    let wait_secs = 30;
    if (demo) {
        wait_secs = 5;
    }
    setTimeout(function() {
        if (tt.mid_break.length === 1) {
            document.getElementById('description').innerHTML = tt.half_break;
        } else {
            document.getElementById('description').innerHTML = tt.mid_break2;
        }
    }, wait_secs * 1000);
    if (!demo) {
        misc['speed_empty_' + block_number] = speed.empty();
        misc['speed_pow_' + block_number] = speed.pow2();
    }
};

const mid_continued = function() {
    page_switches.break_end = ro(DT.now());
    document.getElementById('description').innerHTML = tt.practice_2;
    start_block();
};

const next_trial = function() {
    if (block_items.length > 0) {
        trial_phase1 = setTimeout(function() {
            if (document.getElementById('stimulus').textContent === '') {
                clearTimeout(set_next);
                requestAnimationFrame(function(stamp) {
                    document.getElementById('stimulus').style.display = 'block';
                    document.getElementById('stimulus').innerHTML = '<span style="bottom: 6px;position: relative;">&#9632</span>'; //Setting the square
                    trial_phase2 = setTimeout(function() {
                        document.onkeydown = null;
                        run_trial(stamp);
                    }, 300);
                });
            } else {
                console.log('Trial already running!');
            }
        }, 300);
        document.onkeydown = delay_trial;
    } else {
        DT.loopOff();
        next_block();
    }
};

const delay_trial = function() {
    clearTimeout(trial_phase1);
    clearTimeout(trial_phase2);
    document.onkeydown = null;
    document.getElementById('stimulus').textContent = '';
    document.getElementById('keystroke').style.display = 'block';
    set_next = setTimeout(function() {
        document.getElementById('keystroke').style.display = 'none';
        next_trial();
    }, 1000);
};

const run_trial = function(stamp1) {
    //Setting the timer (10sec) in case of inactivity
    response_window = setTimeout(function() {
        document.getElementById('pauseControl').style.height = 'auto';
        // countdown();
    }, (10 * 1000));
    if (typeof sim_user === "function") {
        sim_user();
    }
    total_trialcount++;
    trial_number++;
    item_x = block_items.shift();
    if (demo) {
        console.log(item_x); // print info
    }
    ['keydown_time', 'keydown_time_now', 'keyup_time',
        'disp_square', 'disp_digit', 'disp_digit_noraf',
        'disp_digit_now', 'response_key', 'correct',
        'trusted', 's_width', 's_height', 'fullscreen'
    ].forEach((key) => {
        item_x[key] = 'NA';
    });
    item_x.fullscreen = !!(document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement);
    item_x.s_width = window.innerWidth;
    item_x.s_height = window.innerHeight;
    item_x.disp_square = stamp1;
    item_x.disp_digit_noraf = DT.now();
    requestAnimationFrame(function(stamp2) {
        document.getElementById('stimulus').textContent = item_x.digit_text;
        item_x.disp_digit_now = DT.now();
        item_x.disp_digit = stamp2;
        trial_listener();
    });

};


const trial_listener = function() {
    document.onkeydown = function(event) {
        item_x.keydown_time = event.timeStamp;
        item_x.keydown_time_now = DT.now();
        if (event.key.toLowerCase() == keys.d || event.key.toLowerCase() == keys.k) {
            document.onkeydown = null;
            document.onkeyup = function(ev2) {
                if (ev2.key === event.key) {
                    item_x.keyup_time = ev2.timeStamp;
                    document.onkeyup = null;
                }
            };
            clearTimeout(response_window);
            document.getElementById('pauseControl').style.height = '0';
            down_counter = false;
            document.body.style.backgroundColor = "rgb(150, 150, 150)";
            fullscreen_on();
            if (keys.d == event.key.toLowerCase()) {
                item_x.response_key = 'd';
            } else {
                item_x.response_key = 'k';
            }
            item_x.trust = event.isTrusted;
            const correct_type = current_task === 'parity' ? item_x.parity : item_x.magn;
            item_x.correct = (task_type[which_half][item_x.response_key] === correct_type);

            const reverse = { 'd': 'k', 'k': 'd' };
            const expected_resp = item_x.correct ? item_x.response_key : reverse[item_x.response_key];
            item_x.snarc = (expected_resp === 'd' && item_x.magn === 'small' || expected_resp === 'k' && item_x.magn === 'large') ? 'cong' : 'incong';
            item_x.marc = (expected_resp === 'd' && item_x.parity === 'odd' || expected_resp === 'k' && item_x.parity === 'even') ? 'cong' : 'incong';

            if (phase === 'practice') {
                if (item_x.correct) {
                    feed_correct(true);
                } else {
                    feed_correct(false);
                }
            } else {
                store_response();
            }
        } else {
            feed_astray();
        }
    };
};

const feed_correct = function(correct) {
    if (correct) {
        document.getElementById('stimulus').textContent = tt.correct_key;
        document.getElementById('stimulus').classList.add('right');
    } else {
        document.getElementById('stimulus').textContent = tt.wrong_key;
        document.getElementById('stimulus').classList.add('wrong');
    }
    setTimeout(function() {
        store_response();
    }, 1000);
};

const feed_astray = function() {
    document.getElementById('wrongkeys').style.height = 'auto';
    setTimeout(function() {
        document.getElementById('wrongkeys').style.height = '0';
    }, 1000);
};


let down_counter = false;
const countdown = function() {
    const elem = document.getElementById('countdown');
    const start = Date.now();
    const duration = 60 * 60; // 1 hour
    let minutes, seconds, hours;
    down_counter = true;
    const timer = function() {
        const diff = Math.ceil(duration - ((Date.now() - start) / 1000));
        hours = (diff / (60 * 60)) | 0;
        minutes = ((diff % (60 * 60)) / 60) | 0;
        seconds = (diff % 60) | 0;
        hours = "0" + hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        elem.textContent = hours + ":" + minutes + ":" + seconds;
        if (diff > 0) {
            setTimeout(() => {
                if (down_counter) {
                    timer();
                }
            }, 100);
        } else if (down_counter === true) {
            misc.timedout = true;
            switch_page('snarc', 'thank');
            document.getElementById('endofstudy').textContent = 'We are sorry but you have paused the task for too long, over an hour. Therefore you cannot continue. You may however receive partial compensation for the part you have completed.';
            upload_final();
        }
    };
    timer();
};




