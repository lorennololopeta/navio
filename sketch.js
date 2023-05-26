var navio, navio_running, navio_collided;
var mar





















function preload(){
navio_running = loadAnimation ('ship-1.png',"ship-2.png","ship-3.png","ship-4.png");
mar = loadImage("sea.png");
navio.addImage(mar);
}

function setup(){
  createCanvas(1000,1000);
  
  navio = createSprite(500,500,20,50);
  navio.addAnimation("running" , navio_running);
  

  

  
}

function draw() {
    background(mar);
    drawSprites();
    if (mar.x < 0) {
      mar.x = mar.width/2;
}
}