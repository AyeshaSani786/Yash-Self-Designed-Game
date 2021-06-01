var canvas;
var shooter, shooter1,shooter2;
//var garden;
//var Obstacle;
var playerCount;
var gameState = 0;
var database;
var allPlayers;
var form,game,player;


function preload() {
track = loadImage("track.png")
}

function setup(){
    var canvas = createCanvas(1200,1200);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
   // garden =  createSprite(900,700,50,50);
   //garden.addImage(gardenImg) 
  // garden.velocityY = 4 ; 
    
   //shooter = createSprite(800,700,10, 15);
  // shooter.shapeColor = "red";
   
   
}


function draw(){
    background("white");
    //image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
    
    if(playerCount === 2){
       game.update(1);
    }
    if(gameState ===1){
         clear();
         game.play();
    }
}
  //  
   // if(keyDown(LEFT_ARROW)){
   //     shooter.x=shooter.x -3
   // }
   // if(keyDown(UP_ARROW)){
  //      shooter.y=shooter.y -3
  //  }
    
  //  if(keyDown(RIGHT_ARROW)){
       // shooter.x=shooter.x +3
  //  }
  //  if(keyDown(DOWN_ARROW)){
   //     shooter.y=shooter.y +3
   // }

   // spawnObstacle();
   // drawSprites();
    
//}
//spawnObstacle();{

   // if(frameCount % 60 ===0){
       //  Obstacle = createSprite(400,200,10,20)
  //  }

//}


