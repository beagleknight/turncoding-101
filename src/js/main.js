var GAME = {};

(function (exports) {
    var canvas   = document.getElementById('game'),
        ctx      = canvas.getContext("2d"),
        before   = +new Date();

    function update (dt) {
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

        update(dt / 1000); // Elapsed time in seconds
        render();

        exports.requestAnimationFrame(loop);
    }

    exports.start = function () {
        loop();
    };
    
    // TODO: refactor this code on its own module
    exports.player = {
        x: 100,
        y: 100,
        vx: 0,
        vy: 0,
        w: 50,
        h: 50,
        maxSpeed: 100,
        sizeFactor: 1,
        
        update: function(dt) {
            var keyboard = exports.keyboard;

            this.x += this.vx * dt;
            this.y += this.vy * dt;

            this.sizeFactor = 1;
            if(keyboard.isPressed("UP_ARROW")) {
                this.sizeFactor = 2;
            } else if(keyboard.isPressed("DOWN_ARROW")) {
                this.sizeFactor = 0.5;
            }

            this.vx = 0;
            if(keyboard.isPressed("LEFT_ARROW")) {
                this.vx = -this.maxSpeed;
            } else if(keyboard.isPressed("RIGHT_ARROW")) {
                this.vx = this.maxSpeed;
            }
        },
        
        render: function(context) {
            context.fillRect(this.x, this.y, this.w*this.sizeFactor, this.h*this.sizeFactor);
        }
    };
}(GAME));
