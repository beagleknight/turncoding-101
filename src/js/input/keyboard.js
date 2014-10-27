var GAME = GAME || {};

(function (exports) {
    "use strict";

    var keyPressed = {},
        keyboard   = {},
        LUT = {
            LEFT_ARROW: 37,
            UP_ARROW: 38,
            RIGHT_ARROW: 39,
            DOWN_ARROW: 40
        };
    
    document.addEventListener("keydown", function(e) {
        keyPressed[e.which] = true;
    });
	
    document.addEventListener("keyup", function(e) {
        keyPressed[e.which] = false;
    });

    keyboard.isPressed = function (code) {
        if (typeof code === "string") {
            code = LUT[code];
        }
        return keyPressed[code];
    };

    exports.keyboard = keyboard;
}(GAME));
