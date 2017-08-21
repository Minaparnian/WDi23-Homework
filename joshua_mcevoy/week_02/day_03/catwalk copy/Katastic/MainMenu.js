Game.MainMenu = function(game){
    var titlescreen;
   var playbutton;
    var controlbutton;
};



Game.MainMenu.prototype = {
    
    create: function(game){
        //titlescreen = game.add.sprite(game.world.centerX, game.world.centerY - 192, 'titlescreen');
        titlescreen = game.add.sprite(0, 0, 'titlescreen');

        //titlescreen.anchor.setTo(0.5);
        //titlescreen.anchor.setTo(0.5, 0.5);
        //console.log("Is the button getting created at all?"+game.world.centerX+"||"+game.world.centerY);
        //this.createButton(game, "Play", game.world.centerX, game.world.centerY + 32, 300, 100, 
        
        
        
        
        
        this.createButton(game, "Play", 500, 410, 300, 100,     
        function (){
            this.state.start('Level1');
        });
        
        this.createButton(game, "Controls", 500,525, 300, 100, 
        function (){
            //console.log('Jump: W, Left: A, Right: D');
            this.createButton(game, "Jump: W, Left: A, Right: D", 500,525, 400, 180, 
            function (){
                this.state.start('MainMenu');
        });
        });
            
        
        
        
        
    },
    
    update: function(game){
        //console.log('update called');
    },
    
    createButton: function (game, string, x, y, w, h, callback){
        
        var button1 = game.add.button(x, y, 'button', callback, this, 2, 1, 0);
        
        button1.anchor.setTo(0.5, 0.5);
        button1.width = w;
        button1.height = h;
        
        var txt = game.add.text(button1.x, button1.y, string, {font: "30px Arial", fill:"#fff", align: "center"});
        
        txt.anchor.setTo(0.5, 0.5);
    }
};