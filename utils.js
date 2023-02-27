/* Gaspar Lukacs 2022 */
/*jshint esversion: 6 */

const unload_attemps = [];
const page_switches = {};

const neat_date = function() {
    const m = new Date();
    return m.getFullYear().toString().slice(-2) + "" +
        ("0" + (m.getMonth() + 1)).slice(-2) + "" +
        ("0" + m.getDate()).slice(-2) + "" +
        ("0" + m.getHours()).slice(-2) + "" +
        ("0" + m.getMinutes()).slice(-2) + "" +
        ("0" + m.getSeconds()).slice(-2);
};

const rchoice = function(array) {
    return array[Math.floor(array.length * Math.random())];
};

const rdigit = function(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const mean = function(array) {
    return array.reduce((a, b) => a + b) / array.length;
};

// shuffle array function
const shuffle = function(arr) {
    const array = JSON.parse(JSON.stringify(arr));
    const newarr = [];
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        newarr[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return newarr;
};

const capitalize = function(s) {
    return s && s[0].toUpperCase() + s.slice(1);
};

const small_screen = function() {
    return (screen.width < 760);
};

const keep_state = function() {
    window.onbeforeunload = (event) => {
        event.preventDefault();
        unload_attemps.push(DT.now());
        misc.unloads = unload_attemps.join('_');
        upload_interim();
        const warn = "Are you sure you want to exit? If you leave this page, your will not be able to continue the task.";
        event.returnValue = warn;
        return warn;
    };
    history.pushState(null, null, location.href);
    history.back();
    history.forward();
    window.onpopstate = function() {
        history.go(1);
    };
};

const ro = function(num) {
    return ((Math.round(num * 100) / 100).toFixed(2));
};
const to_sec = function(num) {
    return (Math.round(num / 1000));
};

const reset_scale = function() {
    const scale_w = window.screen.width / window.innerWidth;
    document.getElementById("stimulus").style.fontSize = 72 / scale_w + 'px';
};

const keep_scale = function() {
    window.onresize = reset_scale;
};

const fullscreen_on = function(doit = false) {
    if (doit != true && (demo || typeof sim_user === "function")) {
        return;
    }
    const element = document.documentElement;
    if (element.requestFullscreen) { //W3C standard
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { //FireFox
        element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) { //IE/Edge
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) { //Chrome and Safari
        element.webkitRequestFullscreen();
    } else if (element.webkitSupportsFullscreen) { //Chrome and Safari
        element.webkitEnterFullscreen();
    }
};
// The function initializes the exit from full screen mode for different browsers
const fullscreen_off = function() {
    if (demo) {
        return;
    }
    if (document.exitFullscreen) { //W3C standard
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { //Chrome and Safari
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) { //FireFox
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) { //IE/Edge
        document.msExitFullscreen();
    } else if (element.webkitSupportsFullscreen) { //Chrome and Safari
        element.webkitExitFullscreen();
    }
};


const fullscreen_state = function(on = () => { }, off = () => { }) {
    if (document.fullscreenElement || document.mozFullScreenElement ||
        document.webkitFullscreenElement || document.msFullscreenElement) {
        on();
    } else {
        off();
    }
};

const fullscreen_change = function(on = () => { }, off = () => { }) {
    ['fullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange', 'webkitfullscreenchange'].forEach((btype) => {
        document.addEventListener(btype, function() {
            fullscreen_state(on, off);
        });
    });
};

const is_mobile = function() {
    let check = false;
    (function(a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

const get_radio = function(rad_name) {
    const rad_val = document.querySelector('input[name=' + rad_name + ']:checked');
    return (rad_val ? rad_val.value : "");
};

const spinner_content = /*html*/ `
        <div class="g_spinner">
            <svg class="g_circular" viewBox="25 25 50 50">
                <circle class="g_path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
            </svg>
        </div>`;

const switch_page = function(current, next, wait = 0, enter_fulls = true) {
    document.getElementById(current).style.display = 'none';
    window.scrollTo(0, 0);
    if (enter_fulls) {
        fullscreen_on();
    }
    if (wait == 0) {
        document.getElementById(next).style.display = 'block';
    } else {
        setTimeout(function() {
            document.getElementById(next).style.display = 'block';
        }, wait);
    }
    page_switches['p' + Object.keys(page_switches).length + '_' + next] = ro(DT.now() + wait);
    upload_interim();
};

let dragged_id;
const let_drop = function(ev) {
    let t = ev.target;
    if (t && t.children.length === 0 &&
        (t.classList.contains("img_targ") || dragged_id.slice(0, 8) === t.id.slice(0, 8))) {
        ev.preventDefault();
    }
    return false;
};

const drag = function(ev) {
    dragged_id = ev.target.id;
    ev.dataTransfer.setData("text", ev.target.id);
};

const drop = function(ev) {
    ev.preventDefault();
    const t = ev.target;
    const data = ev.dataTransfer.getData("text");
    const dragged = document.getElementById(data);
    if (dragged !== t) {
        t.appendChild(dragged);
    }
};

const similar_text = function(first, second, percent = true) {
    //  discuss at: https://locutus.io/php/similar_text/
    // original by: Rafał Kukawski (https://blog.kukawski.pl)
    // bugfixed by: Chris McMacken
    // bugfixed by: Jarkko Rantavuori original by findings in stackoverflow (https://stackoverflow.com/questions/14136349/how-does-similar-text-work)
    // improved by: Markus Padourek (taken from https://www.kevinhq.com/2012/06/php-similartext-function-in-javascript_16.html)
    // minor adjustments by GL 2023
    // PHP reference: Programming Classics: Implementing the World's Best Algorithms by Oliver (ISBN 0-131-00413-1)
    // https://www.php.net/manual/en/function.similar-text.php
    //   example 1: similar_text('Hello World!', 'Hello locutus!')
    //   returns 1: 8
    //   example 2: similar_text('Hello World!', null)
    //   returns 2: 0
    if (first === null ||
        second === null ||
        typeof first === 'undefined' ||
        typeof second === 'undefined') {
        return 0;
    }
    first += '';
    second += '';
    let pos1 = 0;
    let pos2 = 0;
    let max = 0;
    const firstLength = first.length;
    const secondLength = second.length;
    let p;
    let q;
    let l;
    let sum;
    for (p = 0; p < firstLength; p++) {
        for (q = 0; q < secondLength; q++) {
            for (l = 0; (p + l < firstLength) && (q + l < secondLength) && (first.charAt(p + l) === second.charAt(q + l)); l++) { // eslint-disable-line max-len
                // @td: ^-- break up this crazy for loop and put the logic in its body
            }
            if (l > max) {
                max = l;
                pos1 = p;
                pos2 = q;
            }
        }
    }
    sum = max;
    if (sum) {
        if (pos1 && pos2) {
            sum += similar_text(first.substr(0, pos1), second.substr(0, pos2), false);
        }
        if ((pos1 + max < firstLength) && (pos2 + max < secondLength)) {
            sum += similar_text(
                first.substr(pos1 + max, firstLength - pos1 - max),
                second.substr(pos2 + max,
                    secondLength - pos2 - max), false);
        }
    }
    if (!percent) {
        return sum;
    }
    return (sum * 200) / (firstLength + secondLength);
};