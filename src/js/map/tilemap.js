var GAME = GAME || {};

(function (exports) {
    "use strict";

    //Tile Map support
    exports.tileMap = {
		//TODO: Make parametrizable
        x: 0,
        y: 0,
        tileHeight: 16,
        tileWidth: 16,
        map: [[0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0],
			  [2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0],
			  [2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0],
			  [2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,2,3,0,0,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0,0,1,2,3,0]
			  [2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2],[2]],
        image: "player",
        imageHeight: 2,
        imageWidth: 2,
                
        render: function() {
            var i, j;
			var inc_i = Math.floor(Math.floor(this.y) / this.tileHeight),
				inc_j = Math.floor(Math.floor(this.x) / this.tileWidth);
			var off_i = Math.floor(this.y) % this.tileHeight,
				off_j = Math.floor(this.x) % this.tileWidth;
			
			//TODO: Optimization of boundaries in for
            for(i = 0; i < this.map.length - inc_i; i++) {
                for(j = 0; j < this.map[i+inc_i].length - inc_j; j++) {
                    exports.imageManager.drawImage("player", j*this.tileWidth - off_j, i*this.tileHeight - off_i, this.tileWidth, this.tileHeight, (this.map[i+inc_i][j+inc_j] % this.imageWidth) * this.tileWidth, Math.floor(this.map[i+inc_i][j+inc_j]/this.imageWidth) * this.tileHeight);
                }
            }
        }
    };
}(GAME));
