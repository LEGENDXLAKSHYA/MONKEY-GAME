
var monkey , monkey_running;
var banana, bananaImage, obstacle, obstacleImage, bananaGroup;   
var FoodGroup, obstacleGroup
var score
var ground
var score = 0;
var SurvivalTime = 0 ;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas(600,600);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
 
  
  ground = createSprite(400,350,900,10);
  ground.x = ground.width/2;
  console.log(ground.x)
}


function draw() {
  background(0);
   
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:" + score ,500 ,50);
  score = score + Math.round(getFrameRate()/60);
  
  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+ SurvivalTime,100,50);
  
  
  
  if(keyDown("space")) {
    monkey.velocityY = -4;
  }
   monkey.velocityY = monkey.velocityY + 0.8;
  obstacles();
   food();
   monkey.collide(ground);
   drawSprites();
}
function food () {
  if (frameCount % 80 === 0) {
    var banana = createSprite(300,250,20,20);
        banana.addImage(bananaImage);
        banana.scale = 0.1;
        banana.velocityX = -4;
        banana.y = Math.round(random(120,200));
        banana.lifetime = 100;
    
      
  }
}

function obstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(400,315,10,40);
    obstacle.lifetime = 250 ; 
    obstacle.addImage(obstacleImage);
    obstacle.scale= 0.2;
    obstacle.velocityX = -4;
  }
}




