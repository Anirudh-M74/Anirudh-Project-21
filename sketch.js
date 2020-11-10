var bullet, wall, thickness;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  thickness=random(22,100)
  wall=createSprite(1500,200,thickness,200)
  wall.shapeColor=(80,80,80)
  speed=random(223,321)
  weight=random(30,52)
  
}

function draw() {
  background(0);  
  bullet.velocityX=speed;
  bullet.weight=random(30,52)
  if (wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation = 0.5 * weight * speed * speed / thickness*thickness*thickness;
    if(deformation<10)
    {
      wall.shapeColor=rgb(90, 211, 29);
    }
        if(deformation>10)
    {
      wall.shapeColor=rgb(255, 0, 0)
    }
  }
 
  drawSprites();
}