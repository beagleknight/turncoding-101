var GAME = {};

(function (exports) {
    var canvas = document.getElementById('game'),
        ctx    = canvas.getContext("2d"),
        before = +new Date();

    function update (dt) {
        window.console.log("Time passed (ms): " + dt);
    }

    function render () {
        ctx.fillRect(100, 100, 50, 50);
    }

    function loop () {
        var now = +new Date(),
            dt  = now - before;
        
        before = now;

        update(dt);
        render();

        exports.requestAnimationFrame(loop);
    }

    exports.start = function () {
        loop();
    };
}(GAME));
