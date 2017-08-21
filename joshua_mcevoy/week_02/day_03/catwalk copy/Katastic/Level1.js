Game.Level1 = function(game){
   
    var map;
    var layer;
    var mushrooms; 
    var boxes;
    
    
    var player;
    var controls = {};
    var background;
    
    var reset;
    var MainMenuButton;
        
    var bite;
    var jump;
    var music;
    
};

    var score = 0;
    var scoreText;
   

Game.Level1.prototype = {
    
    create: function(game){
        
        game.sound.stopAll();
        //console.log('back in level1');
        this.stage.backgroundColor = '#3A5963';
        
        background = this.game.add.sprite(0, 0, 'background');
        
        
        this.physics.arcade.gravity.y = 1600;
        ///////////////////////
        //this.game.physics.startSystem(Phaser.Physics.ARCADE);
        ///////////////////////
        
        //map = this.add.tilemap('map', 50 ,50);
        //map.addTilesetImage('tileset');
        //layer = map.createLayer(0);
        //layer.resizeWorld();
        
        
        mushrooms = game.add.group(); 
        mushrooms.enableBody = true;
        
        boxes = game.add.group(); 
        boxes.enableBody = true;
        
        watersurfaces = game.add.group(); 
        watersurfaces.enableBody = true;
        
        
        
        
        map = this.add.tilemap('map');
        map.addTilesetImage('TileSetNewWorld', 'tileset');
        layer = map.createLayer('Ground');
        layer.resizeWorld();
        
        
        map.createFromObjects('Object Layer Mushrooms', 26, 'mushroom', 0, true, false, mushrooms);
        map.createFromObjects('Object Layer Boxes', 19, 'box', 0, true, false, boxes);
        map.createFromObjects('Object Layer Water', 11, 'watersurface', 0, true, false, watersurfaces);
        
        
        map.setCollisionBetween(0,19);
        //map.setCollisionBetween(12,13);
        //map.setCollisionBetween(15,19);
        //map.setTileIndexCallback(11, this.playDead, this);
        //map.setTileIndexCallback(14, this.playDead, this);
        //map.setTileIndexCallback(26, this.playDead, this);
        
        
        
        bite = game.add.audio('bitesound');
        jump = game.add.audio('jumpsound');
        music = game.add.audio('music');
        
        
        
        //Score
        //console.log('score =' + score);
        scoreText = game.add.text(16, 16, 'Mushroom: 0', {font: '20px Arial', fill: '#08088A'});
        scoreText.fixedToCamera = true;
        //scoreString + score
       
        
        
        player = this.add.sprite(100, 550, 'player');
        player.anchor.setTo(0.5,0.5);
        
        player.animations.add('idle', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true);
        player.animations.add('run', [10, 11, 12, 13, 14, 15, 16, 17], 8, false);
        player.animations.add('jump', [20, 21, 22, 23, 24, 25, 26, 27], 8, false);
        player.animations.add('dead', [30, 31, 32, 33, 34, 35, 36, 37, 38, 39], 10, false);
        
        this.physics.arcade.enable(player);
        
        this.camera.follow(player);
        
        player.body.collideWorldBounds = true;
        
        
        ///////////MUST STOP MUSIC ON RESET! 
        music.play();
        
        controls = {
            
            right: this.input.keyboard.addKey(Phaser.Keyboard.D),
            left: this.input.keyboard.addKey(Phaser.Keyboard.A),
            up: this.input.keyboard.addKey(Phaser.Keyboard.W),
            
        };
        
        background.fixedToCamera = true;
        
        //////reset button
        reset = this.add.button(this.world.centerX - 320, this.world.centerY + 180, 'reset', function(){
            this.state.start('Level1'), score = 0;
            //game.sound.stopAll();
        }, this, 1, 0, 2);
        reset.fixedToCamera = true;
        
        ////Main Menu button
        MainMenuButton = this.add.button(this.world.centerX - 370, this.world.centerY + 180, 'MainMenuButton', function(){
            this.state.start('MainMenu'), score = 0;
            game.sound.stopAll();
        }, this, 1, 0, 2);
        MainMenuButton.fixedToCamera = true;
        
        
        
        
    },
    
    update: function(game){
    
        var jumpTimer = 0;
    
        this.physics.arcade.collide(player, layer);
        this.physics.arcade.collide(mushrooms, layer);
        this.physics.arcade.collide(boxes, layer);
        this.physics.arcade.collide(player, boxes);
        this.physics.arcade.collide(boxes, boxes);
        this.physics.arcade.collide(watersurfaces, layer);
        this.physics.arcade.overlap(player, mushrooms, this.eatMushroom, null, this);
        this.physics.arcade.overlap(player, watersurfaces, this.playDead, null, this);
        
        
        
            
        player.body.velocity.x = 0; 
        
        if(controls.right.isDown){
            
            player.scale.setTo(1,1);
            player.body.velocity.x += 600;
            if(player.body.onFloor() || player.body.touching.down)
                player.animations.play('run');
        }
        
        if(controls.left.isDown){
            
            player.scale.setTo(-1,1);
            player.body.velocity.x -= 600;
            if(player.body.onFloor() || player.body.touching.down)
                player.animations.play('run');
        }
        
        if(controls.up.isDown && (player.body.onFloor() || player.body.touching.down) && this.time.now > jumpTimer)
            {
                player.body.velocity.y = -750;
                
                //resetting the jump timer
                
                jumpTimer = this.time.now + 750;
                player.animations.play('jump');
                jump.play();
            }
        
        if(player.body.velocity.x == 0 && player.body.velocity.y == 0){
            player.animations.play('idle');
        }
        
        
        
        
        
    },
    
    
    eatMushroom: function(player, mushrooms){
        //var score = 0;
        
        //console.log('in eatMushroom');
        //map.putTile(-1, layer.getTileX(player.x), layer.getTileY(player.y));
        
        
        mushrooms.kill();
        bite.play();
        score += 1;
        scoreText.text = 'Mushrooms: ' + score;
         
        
        if(score == 26)
            {
                
                reset = this.add.button(300, 350, 'buttongameover', function(){
                this.state.start('Level1'), score = 0;
                //game.sound.stopAll();
            }, this, 1, 0, 2);
            reset.fixedToCamera = true;
                
                
            }
        
        
        
    },
    
    playDead: function(game){
        player.animations.play('dead');
        player.reset(100, 500);
        //game.time.events.add(Phaser.Timer.SECOND * 2, resetPlayer, this);
    },
    
    resetPlayer: function(){
        
        player.reset(100, 550);
        
    },
    
    
    
    
    createButton: function (game, string, x, y, w, h, callback){
        
        var button1 = game.add.button(x, y, 'button', callback, this, 2, 1, 0);
        
        button1.anchor.setTo(0.5, 0.5);
        button1.width = w;
        button1.height = h;
        
        var txt = game.add.text(button1.x, button1.y, string, {font: "28px Arial", fill:"#ffffff", align: "center"});
        
        txt.anchor.setTo(0.5, 0.5);
    }
}