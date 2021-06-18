var background,backgroundImage;
var  invisibleground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 backgroundImage = loadImage("forest-2d.jpg");
}

 

function setup() {
  
  createCanvas(600, 600); 
  background = createSprite (250,250);
  background.addImage("background",backgroundImage);
  background.x=background.width/2;
  background.scale=1;
  
  score=0;
  survivalTime=0;

  FoodGroup= new Group();
  obstacleGroup= new Group();
  
  monkey = createSprite (40,460) ;
  monkey.addAnimation("running",monkey_running);
  monkey.scale= 0.1 ;
  
  invisibleground = createSprite(180,465,400,40);
  invisibleground.visible = false;
  
  FoodGroup= new Group();
  obstacleGroup= new Group();
}


function draw() {
 
  background.velocityX=-3;
  if (background.x<100){
    background.x=background.width/2;
  }
  
  
  if(keyDown("space")&& monkey.y >= 200) {
    monkey.velocityY = -10;
  }

  if(frameCount % 200===2){
    fruits();
  }
 
   
    if(frameCount % 300===2){
  
  }
  monkey.velocityY = monkey.velocityY +0.8;
  monkey.collide(invisibleground);
  
  fruits();  
  stones();
  
  drawSprites();
  fill("white") ;
  text("Score: "+ score, 500,50);
  
   fill("black")
  var survivalTime=Math.ceil(frameCount/frameRate() );
  text("Survival Time: "+ survivalTime,350,50);
  
}

function fruits(){
  
  if(frameCount % 200===1){  
      var banana = createSprite(500,Math.round(random(300,350)),8,8);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-3;
  FoodGroup.add(banana);
  }
}

function stones(){
   
    if(frameCount % 180===1){
        var obstacle = createSprite(500,400);
  obstacle.addImage(obstaceImage);
  obstacle.scale=0.2;
  obstacle.velocityX=-3 ;  
  obstacleGroup.add(obstacle);
  
  }

}


