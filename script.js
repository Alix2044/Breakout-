
let r = 20;
let x = 400/2;
let y = 400/2;

var ball;
var paddle;
var brick;

var score = 0;
var play = true;

let brickArray = []

function setup(){
    
    width = 800;
    height = 400;
    createCanvas(width, height);
    
    ball = new Ball();
    paddle = new Paddle();
    brick = new Brick();
 for(let j = 0; j<7;j++){
  for(let i = 0; i<13; i++){
      brickArray.push(new Brick(i*(width/13),j*((width/13)/4),random(255),random(255),random(255)));

    }
 }
    

  for(let i = 0; i<brickArray.length;i++){

      
      brickArray[i].show();
    brickArray[i].collision(ball);
    
    }
    
   

  
  }
  
  function draw(){

    background(0);
   
   
    fill(255,0,0);
    textSize(20);
    text(score,20,50)

   // ball.show()
   // ball.move()
   for(let i = 0; i<brickArray.length;i++){
   brickArray[i].x;
   brickArray[i].show()
        brickArray[i].collision(ball);
      }


 
  if(play == true){
       ball.show();
     ball.move();
      paddle.show();
     paddle.collision(ball);
       paddle.x = mouseX;

    

     


     brick.show();
    if(brick.active == true){

      brick.collision(ball);

      if(!brick.active == true){
        console.log("1232")
        score ++;
      }
    }
       if(paddle.x < 0){ paddle.x = 0}
       if(paddle.x+ paddle.w >= width){paddle.x = width-paddle.w}
       if(ball.y - ball.r > height){play = false}
 
     }
     else 
     {
 
       textSize(20);
       text("GAME OVER!!!",width/2-75,height/2);
       ball.reset();
 
     }
     
 
    

    

  }