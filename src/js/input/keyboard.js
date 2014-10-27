var GAME = GAME || {};

(function (exports) {
    "use strict";

    var keyPressed = {},
        keyboard   = {};
    
    document.addEventListener("keydown", function(e) {
        keyPressed[e.which] = true;
    });
	
    document.addEventListener("keyup", function(e) {
        keyPressed[e.which] = false;
    });

    keyboard.isPressed = function (code) {
        return keyPressed[code];
    };

    exports.keyboard = keyboard;
}(GAME));
