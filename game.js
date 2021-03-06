class Game{
    constructor(){

    }

    getState(){
        var  gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        });
    }

    async start(){
        if(gameState === 0){
           player = new Player();
           var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
           form = new Form()
           form.display();
        }
    

    // Create two players as  sprite
    shooter1 = createSprite(100,200,100,100);
    //car1.addImage("car1",car1_img);
    shooter2 = createSprite(300,200,100,100);

}


    play(){
        form.hide();
        textSize(25);
        text("READY TO SHOOT",120,100)
        Player.getPlayerInfo();

        if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
     // var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        //y = displayHeight - allPlayers[plr].distance;
       // shooters[index-1].x = x;
        //shooters[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          shooters[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    //if(player.distance > 3860){
     // gameState = 2;
     // player.rank +=1
     // Player.updateCarsAtEnd(player.rank)
   // }
   if(keyDown(LEFT_ARROW)){
        shooter1.x=shooter1.x -3
    }
    if(keyDown(UP_ARROW)){
        shooter1.y=shooter1.y -3
     }
     
    if(keyDown(RIGHT_ARROW)){
         shooter1.x=shooter1.x +3
    }
    if(keyDown(DOWN_ARROW)){
        shooter1.y=shooter1.y +3
     }

     if(keyDown("a")){
      shooter2.x=shooter2.x -3
  }
  if(keyDown("w")){
      shooter2.y=shooter2.y -3
   }
   
  if(keyDown("d")){
       shooter2.x=shooter2.x +3
  }
  if(keyDown("z")){
      shooter2.y=shooter2.y +3
   }

 
    drawSprites();
  }
}