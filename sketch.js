
var trex ,trex_running;

var ground,groundImage,invisibleGround

function preload(){

  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

  groundImage=loadImage("ground2.png")
  
}

function setup(){

  createCanvas(600,200)

  trex=createSprite(50,130,20,50)
  trex.addAnimation("running",trex_running)
  trex.scale=0.5

  ground=createSprite(200,180,400,20)
  ground.addImage("moving",groundImage)
  ground.velocityX=-4

  invisibleGround=createSprite(200,190,400,10)
  invisibleGround.visible=false
  
}

function draw(){

  background("white")

  if(keyDown("space")){
    trex.velocityY=-10
  }

  trex.velocityY=trex.velocityY+0.8

  if(ground.x<0){
    ground.x=ground.width/2
  }

  trex.collide(invisibleGround)

  drawSprites()

}
