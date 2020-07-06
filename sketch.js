var movingRect,fixedRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(200,200,20,20);
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";
  fixedRect.velocityX=-2;
  movingRect.velocityX=2;
  fixedRect.velocityY=-2;
  movingRect.velocityY=-2;
}

function draw() {
  background(255,255,255);  
  //movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x<=(movingRect.width/2+fixedRect.width/2)&&fixedRect.x-movingRect.x<=(fixedRect.width/2+movingRect.width/2)){
    fixedRect.velocityX=-1*fixedRect.velocityX;
    movingRect.velocityX=-1*movingRect.velocityX;
  }
  if(movingRect.y-fixedRect.y<=(movingRect.height/2+fixedRect.height/2)&&fixedRect.y-movingRect.y<=(movingRect.height/2+fixedRect.height/2)){
    fixedRect.velocityY=-1*fixedRect.velocityY;
    movingRect.velocityY=-1*movingRect.velocityY;
  }
  drawSprites();
}