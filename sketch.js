var movRect, fixRect;

function setup() {
  createCanvas(1200,800);
  movRect = createSprite(800, 200, 100, 30);
  fixRect = createSprite(200, 200, 50, 80);
  
  movRect.velocityX = -5;
  fixRect.velocityX = 5;

  movRect.debug = true;
  fixRect.debug = true;

  fixRect.shapeColor = "green";
  movRect.shapeColor = "green";
}

function draw() {
  background(0); 
   
  
  if(Is_touching(movRect,fixRect)){
    movRect.velocityX = 0;
  }
  //bounce_Off(movRect,fixRect);
  
  drawSprites();
}

