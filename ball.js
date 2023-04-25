class Ball {
    constructor() {
      this.x = width / 2;
      this.y = height / 2;
      this.r = 15;
      this.start = -7;
      this.slut = 7;
      this.vy = 2.8 + random(0, 2);
      this.vx = 4.9 + random(0, 0.5);
      this.prevX = this.x;
      this.prevY = this.y;
      this.c = color(random(255), random(255), random(255));
    }
  
    move() {
      this.prevX = this.x; // store the previous x position
      this.prevY = this.y; // store the previous y position
      this.x += this.vx;
      this.y += this.vy;
  
      // check for collision with left or right wall
      if (this.x > width || this.x - this.r < 0) {
        this.vx = -this.vx;
      }
  
      // check for collision with top wall
      if (this.y < 0) {
        this.vy = -this.vy;
      }
  
      // check for collision with the brick
      if (
        this.y - this.r < brick.y + brick.h &&
        this.y + this.r > brick.y &&
        this.x - this.r < brick.x + brick.w &&
        this.x + this.r > brick.x
      ) {
        this.x = this.prevX-this.r-100; // set the x position to the previous x position
        this.y = this.prevY-this.r // set the y position to the previous y position
        if (this.prevX < brick.x || this.prevX > brick.x + brick.w) {
          
          this.vx = -this.vx;
        } else {
          this.vy = -this.vy;
        }
      }
    }
  
    show() {
      fill(this.c);
      circle(this.x, this.y, this.r);
    }
  
    reset() {
      this.x = width / 2;
      this.y = height / 2;
      this.vy = random(-10, 10);
      this.vx = random(-10, 10);
    }
  }
  