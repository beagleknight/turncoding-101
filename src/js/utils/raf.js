var GAME = GAME || {};

(function (exports) {
    var raf = (function () {
        return  window.requestAnimationFrame       ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                window.oRequestAnimationFrame      ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
    })();

    exports.requestAnimationFrame = function (cb) {
        raf(cb);
    };
}(GAME));
