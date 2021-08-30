var box;
function setup() {
  createCanvas(1100,650);
  box2=createSprite(250,0,100,1320)
  box4=createSprite(450,0,100,1320)
  box3=createSprite(350,0,100,1320)
  box5=createSprite(550,0,100,1320)
  box=createSprite(150,0,100,1320)
  box6=createSprite(650,0,100,1320)
  box7=createSprite(750,0,100,1320)
  box8=createSprite(850,0,100,1320)
  box9=createSprite(950,0,100,1320)
  box10=createSprite(1500,0,100,1320)
  box11=createSprite(1600,0,100,1320)
  box12=createSprite(1700,0,100,1320)
  ball=createSprite(60,60,50,50);
}
function draw() 
{
box
  background("cyan");
  box2.shapeColor = "red";
  box3.shapeColor = "yellow";
  box4.shapeColor = "orange";
  box5.shapeColor = "violet";
  box9.shapeColor = "red";
  box8.shapeColor = "yellow";
  box7.shapeColor = "orange";
  box6.shapeColor = "Periwinkle";
  box11.shapeColor = "beige";
  box12.shapeColor = "red";
  
  if(keyIsDown(RIGHT_ARROW))
  {
    ball.x=ball.x+5;
  }
  if(keyIsDown(LEFT_ARROW))
  {
    ball.position.x=ball.position.x-5;
  }
  if(keyIsDown(DOWN_ARROW))
  {
    ball.position.y=ball.position.y+5;
  }
  if(keyIsDown(UP_ARROW))
  {
    ball.position.y=ball.position.y-5;
  }
  if(ball.overlap(box)){
    ball.shapeColor = "pink";
  }
  else if(ball.overlap(box2)){
    ball.shapeColor = "purple";
  }
  else if(ball.overlap(box3)){
    ball.shapeColor = "green";
  }
  else if(ball.overlap(box4)){
    ball.shapeColor = "chartreuse";
  }
  else if(ball.overlap(box5)){
    ball.shapeColor = "brown";
  }
  else if(ball.overlap(box6)){
    ball.shapeColor = "pink";
  }
  else if(ball.overlap(box7)){
    ball.shapeColor = "purple";
  }
  else if(ball.overlap(box8)){
    ball.shapeColor = "green";
  }
  else if(ball.overlap(box9)){
    ball.shapeColor = "chartreuse";
  }
  else if(ball.overlap(box10)){
    ball.shapeColor = "brown";
  }
  else
  ball.shapeColor = "grey";

    
drawSprites();
}




