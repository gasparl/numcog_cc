/* Gaspar Lukacs 2022 */
/*jshint esversion: 6 */

// get the appropriate version of "requestAnimationFrame()"
const requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

const DT = {
    // now: gets the appropriate version of "performance.now()"
    // normally available in all modern browsers, but it can resort to the still precise Date()
    // see https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
    now: function() {
        let performance = window.performance || {};
        performance.now = (function() {
            return (
                performance.now ||
                performance.webkitNow ||
                performance.msNow ||
                performance.oNow ||
                performance.mozNow ||
                function() {
                    return new Date().getTime();
                }
            );
        })();
        return performance.now();
    },
    // loop decides whether the RAF loop should continue, see below
    loop: false,
    // loopFunction actually defined below, because of self-reference
    loopFunction: undefined,
    // sets the RAF loop on by setting loop true and initiating the loop function
    // (optionally prints warning info to console)
    loopOn: function(warn = true) {
        if (warn) {
            console.warn('loopOn()');
        }
        this.loop = true;
        this.loopFunction();
    },
    // sets the RAF loop off by setting loop false
    // (optionally prints warning info to console)
    loopOff: function(warn = true) {
        if (warn) {
            console.warn('loopOff()');
        }
        this.loop = false;
    },
    // RAF timestamp samples
    samples: [],
    // refresh interval(s) based on RAF timestamp samples
    interval: undefined,
    // collect RAF timestamp samples, 10 by prevent
    // (also calculates approx. refresh interval, based on median RAF stamp distance)
    getSamples: function(fun = undefined, n = 10) {
        requestAnimationFrame((stamp) => {
            this.samples.push(stamp);
            if (n > 1) {
                this.getSamples(fun, --n);
            } else {
                const samps = this.samples.slice(0);
                if (samps.length > 1 && this.interval === undefined) {
                    samps.shift();
                    this.interval = parseFloat(this.median(samps.slice(1).map((num, i) => {
                        return num - samps[i];
                    }))).toFixed(1);
                }
                if (typeof fun === 'function') {
                    fun();
                }
            }
        });
    },
    // median calculation
    median: function(values) {
        if (values.length === 0) {
            return undefined;
        }
        values.sort(function(a, b) {
            return a - b;
        });
        const half = Math.floor(values.length / 2);
        if (values.length % 2) {
            return values[half];
        }
        return (values[half - 1] + values[half]) / 2.0;
    },
    images: {},
    preload: sources =>
        Promise.all(
            sources.map(
                src => new Promise(function(resolve, reject) {
                    const img = new Image();
                    DT.images[src] = img;
                    img.onload = function() {
                        resolve(img);
                    };
                    img.onerror = reject;
                    img.src = src;
                })))
};

// add the RAF loop function definition
DT.loopFunction = function() {
    if (DT.loop) {
        requestAnimationFrame(DT.loopFunction);
    }
};

Object.seal(DT);
