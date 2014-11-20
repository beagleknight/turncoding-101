var GAME = GAME || {};

(function (exports) {
    "use strict";

    var audioManager = {},
        audioFiles   = {};

    audioManager.loadAudio = function (id, path, type) {
        var audio = new window.Audio();
        audio.src = path;
        audio.type = type;
        audioFiles[id] = audio;
    };

    audioManager.playBackgroundMusic = function (id, options) {
        var backgroundMusic = audioFiles[id];

        options = options || { volume: 0.5, loop: true };

        if (options.volume) {
            backgroundMusic.volume = options.volume;
        }

        if (options.loop) {
            backgroundMusic.addEventListener('ended', function () {
                this.currentTime = 0;
                this.play();
            }, false);
        }

        backgroundMusic.play();
    };

    audioManager.toggleBackgroundMusic = function (id) {
        var backgroundMusic = audioFiles[id];

        if (backgroundMusic.paused) {
            backgroundMusic.play();
        } else {
            backgroundMusic.pause();
        }
    };

    exports.audioManager = audioManager;
}(GAME));
