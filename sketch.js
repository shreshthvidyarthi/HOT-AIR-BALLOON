var balloon, background;
function preload() {
  backgroundImg = loadImage("cityImage.png")
  balloonImage = loadAnimation("hotairballoon1.png", "hotairballoon2.png", "hotairballoon3.png");
}

function setup(){
   database = firebase.database();
   console.log(database);
    createCanvas(500,500);

balloon = createSprite (100,400, 20, 20)
  balloon.addAnimation("baloon", balloonImage);
  balloon.scale = 0.4;
  var balloonPosition =database.ref('baloon/height');
  balloonPosition.on("value", readHeight, showError);
 

}

function draw(){

    background(backgroundImg);
  
        if(keyDown(LEFT_ARROW)){
           updateHeight(-10,0)
          
        }
        else if(keyDown(RIGHT_ARROW)){
          updateHeight(10,0)
        }
        else if(keyDown(UP_ARROW)){
          updateHeight(0,-10)
        }
        else if(keyDown(DOWN_ARROW)){
          updateHeight(0,10)
        }
        drawSprites();
    
      }

    function updateHeight(x,y){
       database.ref('baloon/height').set({
      'x': height.x + x,
     'y': height.y + y
       })
      }
     function readHeight(data) { 
       height = data.val();
       // balloon.x = height.x;
         //balloon.y = height.y;
     }
       function showError() {
      console.log("Error in writing to the database");
       }

       
      