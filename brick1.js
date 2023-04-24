class Brick1 {
    constructor(x, y, w, h, r, g, b) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.r = r;
      this.g = g;
      this.b = b;
      this.active = true;
    }
  
    show() {
      if (this.active) {
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, this.w, this.h);
      }
    }
  
    collision(ball) {
      if (this.active &&
          ball.y - ball.r <= this.y + this.h &&
          ball.y + ball.r >= this.y &&
          ball.x >= this.x && ball.x <= this.x + this.w) {
  
        let ballCenter = ball.x;
        if (ballCenter < this.x) {
          ballCenter = this.x;
        } else if (ballCenter > this.x + this.w) {
          ballCenter = this.x + this.w;
        }
  
        let intersectionPoint = createVector(ballCenter, this.y + this.h/2);
        let direction = p5.Vector.sub(ballCenter, ball.x, ball.y);
        let distance = direction.mag();
        let overlap = ball.r - distance;
  
        if (overlap > 0) {
          let adjust = direction.copy().setMag(overlap);
          ball.x += adjust.x;
          ball.y += adjust.y;
          if (abs(adjust.y) > abs(adjust.x)) {
            ball.reverseY();
          } else {
            ball.reverseX();
          }
          this.active = false;
        }
      }
    }
  }
  