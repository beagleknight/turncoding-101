var GAME = {};

(function (exports) {
    var canvas   = document.getElementById('game'),
        ctx      = canvas.getContext("2d"),
        before   = +new Date();

    function update (dt) {
        window.console.log("Time passed (ms): " + dt);
        exports.player.update(dt);
    }

    function render () {
        //TODO: Performance in refill
        ctx.fillStyle = '#FFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#000';
        exports.player.render(ctx);
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
    
    exports.player = {
        x: 100,
        y: 100,
        w: 50,
        h: 50,
        sizeFactor: 1,
        
        update: function() {
            var keyboard = exports.keyboard;

            if(keyboard.isPressed(38)) {
                this.sizeFactor = 2;
            } else if(keyboard.isPressed(40)) {
                this.sizeFactor = 0.5;
            } else {
                this.sizeFactor = 1;
            }
        },
        
        render: function(context) {
            context.fillRect(this.x, this.y, this.w*this.sizeFactor, this.h*this.sizeFactor);
        }
    };
}(GAME));
