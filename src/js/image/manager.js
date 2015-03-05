var GAME = GAME || {};

(function (exports) {
    "use strict";

    //Image Manager.
    var imageManager  = {},
        imageFiles    = {},
        loadingScreen = null,
        imagesLoaded  = 0,
        imagesAdded   = 0,
        context       = null;
    
    imageManager.init = function(canvas, f, pathLoadingScreen) {
        context = canvas.getContext('2d');
        var i = 0, j = 0;
        var image = new Image();
        image.onload = function() {
            loadingScreen = image;
        }
        image.src = pathLoadingScreen;
        
        
        var run = setInterval(function() {
            if(imageManager.isLoaded()) {
                f();
                clearInterval(run);
            } else {
                var text = "Loading";
                for(j = 0; j < i; j++) {
                    text += ".";
                }
                context.fillStyle = "#FFF";
                context.fillRect(0, 0, canvas.width, canvas.height);
                context.fillStyle = "#000";
                if(loadingScreen) {
                    context.drawImage(loadingScreen, 0, 0);
                }
                context.fillText(text, canvas.width/2, canvas.height/2);
                i = (i + 1) % 9
            }
        }, 200);
    };
    
    imageManager.loadImage = function(name, path) {
        var image = new Image();
        image.onload = function() { 
           imagesLoaded++; 
        };
        imagesAdded++;
        image.src = path;
        imageFiles[name] = image;
    };
    
    imageManager.isLoaded = function() {
        return imagesLoaded === imagesAdded;
    };
    
    imageManager.drawImage = function(name, x, y, w, h, sx, sy) {
        if(sx !== undefined && sy !== undefined) {
            context.drawImage(imageFiles[name], sx, sy, w, h, x, y, w, h);
        } else if(w !== undefined && h !== undefined) {
            context.drawImage(imageFiles[name], x, y, w, h);
        } else {
            context.drawImage(imageFiles[name], x, y);
        }
    };
    
    imageManager.getWidth = function(name) {
        return imageFiles[name].width;
    };
    
    imageManager.getHeight = function(name) {
        return imageFiles[name].height;
    };
    
    exports.imageManager = imageManager;
}(GAME));
