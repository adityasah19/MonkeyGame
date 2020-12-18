
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,ground
var FoodGroup, obstacleGroup
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,400)
monkey=createSprite(80,315,20,20)  
monkey.addAnimation("mo",monkey_running)
monkey.scale=0.1
  
ground=createSprite(400,350,900,10)
ground.velocityx=-4
ground.x=ground.width/2
FoodGroup=new Group();
obstacleGroup=new Group();
}


function draw() {
background(225)
stroke('black');
textSize(20);
fill('black');
text("Survival Time :   "+survivalTime,300,50) 
survivalTime=survivalTime+
Math.round(getFrameRate()/60)

  
if(ground.x<0){
 ground.x=ground.width/2 
}
if(keyDown('space')&& monkey.y>=159){
  monkey.velocityY=-12
}  
monkey.velocityY=monkey.velocityY+0.8
monkey.collide(ground)

food();
obstacle();
  
  
  
  
drawSprites();
  
  




}
function food(){
if(frameCount % 80 === 0){
var banana=createSprite(600,200,68,45)
banana.y=Math.round(random(120,200))
banana.addImage(bananaImage)
banana.scale=0.1
banana.velocityX=-5
banana.lifetime=300
FoodGroup.add(banana);
}

   }
function obstacle(){
  if(frameCount % 300 === 0) {
  var obstacle = createSprite(600,165,10,40);
  obstacle.addImage(obstacleImage)
  obstacle.velocityX = -5;
  obstacle.x=Math.round(random(120,200)) 
  obstacle.scale = 0.1;
  obstacle.lifetime = 300;
  obstacleGroup.add(obstacle);
  }
}




