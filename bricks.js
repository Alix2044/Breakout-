class Bricki {
    constructor(x, y, r, g, b) {
      this.x = x;
      this.y = y;
      this.width = width/13;
      this.height = (width/13)/4;
      this.r = r;
      this.g = g;
      this.b = b;
      this.active = true;
    }
  
    show() {
      if (this.active) {
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, this.width, this.height);
      }
    }
  
    collision(ball) {
      if (this.active && ball.x > this.x && ball.x < this.x + this.width && ball.y > this.y && ball.y < this.y + this.height) {
        this.active = false;
        score++;
      }
    }
  }
  