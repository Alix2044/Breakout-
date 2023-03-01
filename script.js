
let r = 20;
let x = 400/2;
let y = 400/2;

var ball;
var paddle;
var brick;

var score = 0;
var play = true;

function setup(){
    // When website starts
    width = 400;
    height = 400;
    createCanvas(width, height);
    
    ball = new Ball();
    paddle = new Paddle();
    brick = new Brick()

  }
  
  function draw(){
    // Runs in a loop
    background(0);
    circle(x, y, r*2);
   
    fill(0);
    textSize(20);
    text(score,20,50)

    if(play == true){
      ball.show()
      
    }

    

  }