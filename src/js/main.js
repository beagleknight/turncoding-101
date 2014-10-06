var GAME = {};

(function (exports) {
    var canvas = document.getElementById('game'),
        ctx    = canvas.getContext("2d"),
        before = +new Date();

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
    
    exports.keyPressed = {};
    
    exports.player = {
        x: 100,
        y: 100,
        w: 50,
        h: 50,
        sizeFactor: 1,
        
        update: function() {
            if(exports.keyPressed[38]) {
                this.sizeFactor = 2;
            } else if(exports.keyPressed[40]) {
                this.sizeFactor = 0.5;
            } else {
                this.sizeFactor = 1;
            }
        },
        
        render: function(context) {
            context.fillRect(this.x, this.y, this.w*this.sizeFactor, this.h*this.sizeFactor);
        }
    };
    
    document.addEventListener("keydown", function(e) {
        exports.keyPressed[e.which] = true;
    });
	
    document.addEventListener("keyup", function(e) {
        exports.keyPressed[e.which] = false;
    });
}(GAME));
