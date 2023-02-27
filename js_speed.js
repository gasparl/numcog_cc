/* Gaspar Lukacs 2022 */
/*jshint esversion: 6 */

const speed = {
    empty: () => {
        const start = performance.now();
        for (let i = Math.pow(10, 9); i > 0; i--) { }
        return (performance.now() - start);
    },
    pow: () => {
        const start = performance.now();
        for (let i = Math.pow(10, 8); i > 0; i--) {
            Math.pow(i, i);
        }
        return (performance.now() - start);
    },
    pow2: () => {
        const start = performance.now();
        for (let i = Math.pow(10, 9); i > 0; i--) {
            Math.pow(i, i);
        }
        return (performance.now() - start);
    }
};

Object.seal(speed);
