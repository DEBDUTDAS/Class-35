var database,position
var gameState = 0;
var playerCount ;
var player,game,form;

function setup(){
    database=firebase.database();

    createCanvas(500,500);
    game= new Game();
    game.start();

  
}

function draw(){
    background("white");
    
}
