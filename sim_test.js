/* Gaspar Lukacs 2022 */
/*jshint esversion: 6 */

let sim_user_x = function() {
    const rt_sim = rdigit(400, 600);
    simTimeout = setTimeout(function() {
        if (Math.random() < 0.5) { // e.g. 95% correctly right key
            sim_key = keys.d;
        } else {
            sim_key = keys.k;
        }
        document.dispatchEvent(new KeyboardEvent('keydown', {
            'key': sim_key
        }));
        console.log("-- trials left: " + block_items.length +
            ", #" + trial_number + "\n" + sim_key + " RT: " +
            rt_sim);
    }, rt_sim);
};

let sim_user;

const test_on = function() {
    sim_user = sim_user_x;
};

const test_off = function() {
    sim_user = null;
};
