var Game = {};

Game.Boot = function(game){
    
    
};

Game.Boot.prototype = {
    
    init:function(){
        
        //cursor
        this.input.maxPointers = 1;
        
        //this will keep the game running if the player tabs out. 
        this.stage.disableVisibilityChange = true;
        
    },
    
    preload:function(){
        
        this.load.image('preloaderBar', 'assets/preloader.png');
        
        
    },
    
    create: function(){
        
        this.state.start('Preloader')
    },
    
    
}