Game.Preloader = function (game){
    
    this.preloadBar = null;
    
};

Game.Preloader.prototype = {
    
    preload: function(){
        
        this.preloadBar = this.add.sprite(this.world.centerX, 
                                         this.world.centerY, 'preloaderBar');
        
        this.preloadBar.anchor.setTo(0.5, 0.5);
        
        this.time.advanceTiming = true; 
        
        this.load.setPreloadSprite(this.preloadBar);
        
        //this.load.tilemap('map', 'assets/level1_Ground.csv');
        this.load.tilemap('map', 'assets/level1.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('mushroom', 'assets/Mushroom_2.png');
        this.load.image('box', 'assets/Crate.png');
        this.load.image('watersurface', 'assets/watersurface.png');
        this.load.image('water', 'assets/water.png');
        
                
        this.load.image('tileset', 'assets/TileSetNewWorld.PNG');
        //this.load.image('TileSetObjects', 'assets/TileSetObjects.PNG');
        
        this.load.spritesheet('player', 'assets/CatSpriteSheet75.PNG', 75, 75);
        
        this.load.image('background', 'assets/BG.png');
        
        
        
        //loading audio
        this.load.audio('bitesound', 'assets/bite.wav');
        this.load.audio('jumpsound', 'assets/jump.wav');
        this.load.audio('music', 'assets/music.mp3');
        
        
        
        
        
        //loading images for the titlescreen
        this.load.image('titlescreen', 'assets/titlescreen.png');
        this.load.image('button', 'assets/button.png');
        
        this.load.image('buttongameover', 'assets/buttongameover.PNG');
        
        this.load.spritesheet('reset', 'assets/reset.PNG', 44, 47);
        this.load.spritesheet('MainMenuButton', 'assets/MainMenuButton.PNG', 44, 47);
        
        
    },
    
    create: function(){
        
        this.state.start('MainMenu');
    },
};