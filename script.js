
let r = 20;
let x = 400/2;
let y = 400/2;

var ball;
var paddle;
var brick;

var score = 0;
var play = true;

function setup(){
    
    width = 1000;
    height = 800;
    createCanvas(width, height);
    
    ball = new Ball();
    paddle = new Paddle();
    brick = new Brick()

  }
  
  function draw(){

    background(0);
    circle(x, y, r*2);
   
    fill(0);
    textSize(20);
    text(score,20,50)



    if(play == true){
      ball.show();
      ball.move()
      paddle.show();
      paddle.collison(ball);
      paddle.x = mouseX;
      brick.show();
      brick.collision(ball);
      if(paddle.x < 0) paddle.x = 0
      if(paddle.x + paddle.width > width) paddle.x = width - paddle.width
      if(ball.y - ball.r > height) play = false

    }
    else 
    {
      textSize(20);
      text("GAME OVER!!!",width/2,height/2)

    }

    

  }