var block1, block2, block3, block4;
var ball;
var music;

function preload()
{
   music=loadSound("music.mp3")
}

function setup() 
{ 
    createCanvas(800,600); 

    block1=createSprite(0,580,360,30);
    block1.shapeColor="blue";

    block2=createSprite(295,580,200,30);
    block2.shapeColor="red";

    block3=createSprite(515,580,200,30);
    block3.shapeColor="orange";

    block4=createSprite(740,580,220,30);
    block4.shapeColor="yellow";

    ball=createSprite(0,10,40,40);
    ball.shapeColor="white";
  

  

} 
    
    function draw() 
    { 
        background(0); 
        ball.x=mouseX; 
        ball.y=mouseY; 
        
        if (istouch(ball, block1))
        {
          ball.shapeColor="blue"; 
          music.play(); 
        }
      
        if (istouch(ball, block2))
        {
          ball.shapeColor="red";
          music.stop();   
        }

        if (istouch(ball, block3))
        {
          ball.shapeColor="orange";
             
        }

        if (istouch(ball, block4))
        {
          ball.shapeColor="yellow";   
        }
              
             drawSprites(); }
     
      