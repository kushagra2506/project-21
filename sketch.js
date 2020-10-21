var bullet, thickness;

var speed, weight, wall;

var damage;
function setup() {
  createCanvas(1600,400);

  speed = random(55, 90);
  weight = random(400,1500);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,50);
  bullet.velocityX = speed;
  bullet.shapeColor(225);

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor(80,80,80);

  
}

function draw() {
  background(0);
    if(hasCollide(bullet,wall))
    {
      bullet.velocityX = 0;
      damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    }
    if(damage>10)
    {
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10)
    {
      wall.shapeColor = color(0,225,0);
    }
  drawSprites();
}

function hasCollide(bullet,wall)
{
  var bulletRightEdge = bullet.x + bullet.widht;
  if(bulletRightEdge>=wallEdge)
  {
    return true;
  }
  else
  {
    return false;
  }
}