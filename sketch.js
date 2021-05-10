var canvas;
var music;
var box1,box2,box3,box4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1=createSprite(100,590,200,20);
    box1.shapeColor="blue"
    box2=createSprite(310,590,200,20);
    box2.shapeColor="green"
    box3=createSprite(520,590,200,20);
    box3.shapeColor="yellow"
    box4=createSprite(730,590,200,20);
    box4.shapeColor="red"


    //create box sprite and give velocity
ball=createSprite(random(20,750),100,40,40)
ball.shapeColor="white"
ball.velocityX=4;
ball.velocityY=9;
}

function draw() {
    background("black");
    //create edgeSprite
    edges=createEdgeSprites()
    ball.bounceOff(edges)

//add condition to check if box touching surface and make it box
   if(ball.isTouching(box1)){
       ball.shapeColor="blue"
     music.play()  
   }
   if(ball.isTouching(box2)){
    ball.shapeColor="green"
  music.play()  
}
if(ball.isTouching(box3)){
    ball.shapeColor="yellow"
  music.play()  
}      
if(ball.isTouching(box4)){
    ball.shapeColor="red"
  music.play()  
}  



drawSprites()
}
