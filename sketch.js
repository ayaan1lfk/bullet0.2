var bullet,wall;
var speed,weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50,200,40,40);
  wall = createSprite(1200,200,thickness,height/2);

}

function draw() {
  background(0);  
  bullet.collide(wall);
  wall.shapeColor = "grey";
  bullet.velocityX = speed;
  bullet.shapeColor = "white";


  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage > 10){
      wall.shapeColor = color(255,0,0,);
    }
    if(damage < 10){
      wall.shapeColor = color(0,255,0)
    }

  }


  if(bullet.x < 1200){
    bullet.shapeColor = "white";
  }


  

  if(bullet.isTouching(wall)){
    bullet.setVelocity(0,0)
  }

  
  drawSprites();
}




function hasCollided(Rbullet,Rwall){
  bulletLeftEdge = Rbullet.x + Rbullet.width;
  wallRightEdge = Rwall.x;
  if(bulletLeftEdge >= wallRightEdge){
    return true;
  }
  return false
}
















