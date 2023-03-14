
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

    for(let i = 0; i<10; i++){
      brickArray.push(new Brick());
    }


    for(let i = 0; i<brickArray.length;i++){
       brickArray[i].x +=100;
      ;
     }
  }
  
  function draw(){

    background(0);
   
   
    fill(255,0,0);
    textSize(20);
    text(score,20,50)

   // ball.show()
   // ball.move()

 
  if(play == true){
       ball.show();
     ball.move();
      paddle.show();
     paddle.collision(ball);
       paddle.x = mouseX;

    for(let i = 0; i<brickArray.length;i++){

      brickArray[i].show();
      brickArray[i].collision(ball);
    }


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