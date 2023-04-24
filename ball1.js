class Ball1 {
    constructor() {
      this.x = width/2;
      this.y = height/2;
      this.r = 10;
      this.xSpeed = random(-5, 5);
      this.ySpeed = -5;
    }
  
    show() {
      ellipse(this.x, this.y, this.r*2);
    }
  
    move() {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
    }
  
    reset() {
      this.x = width/2;
      this.y = height/2;
      this.xSpeed = random(-5, 5);
      this.ySpeed = -5;
    }
  
    reverseY() {
      this.ySpeed = -this.ySpeed;
    }
  
    reverseX() {
      this.xSpeed = -this.xSpeed;
    }
  }
  