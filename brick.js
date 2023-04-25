class Brick {
  constructor(x, y, r, g, b) {
    this.w = width / 13;
    this.h = this.w / 4;
    this.x = x;
    this.y = y;
    this.active = true;

  this.hit = 3;

    this.r = 100;

    this.r = r;
    this.g = g;
    this.b = b;

    this.score = 0;



    
  }

  show() {
    if (this.active == true) {
      fill(this.r, this.g, this.b);
      rect(this.x, this.y, this.w, this.h);
    }
  }

  collision(b) {
    if (this.active == true) {
      var ballLeft = b.x - b.r;
      var ballRight = b.x + b.r;
      var ballTop = b.y - b.r;
      var ballBottom = b.y + b.r;

      if (
        !(
          ballLeft > this.x + this.w ||
          ballRight < this.x ||
          ballTop > this.y ||
          ballBottom < this.y + this.h
        )
      ) {
        b.vy = -b.vy;
        this.active = false;
      }
      if (
        !(
          ballLeft > this.x + this.w ||
          ballRight < this.x ||
          ballTop > this.y + this.h ||
          ballBottom < this.y + this.h
        )
      ) {
        b.vy = -b.vy;
        this.score += 1;
        this.active = false;
      }
      if (
        !(
          ballLeft > this.x ||
          ballRight < this.x ||
          ballTop > this.y + this.h ||
          ballBottom < this.y
        )
      ) {
        b.vx = -b.vx;
        score += 1;
        this.active = false;
      }
      if (
        !(
          ballLeft > this.x + this.w ||
          ballRight < this.x + this.w ||
          ballTop > this.y + this.h ||
          ballBottom < this.y
        )
      ) {
        b.vx = -b.vx;
        this.active = false;
      }
    }
    return this.active;
  }
}
