function Ball(){
    this.x = width/2;
    this.y = height/2;
    this.r = 15;
    this.vy = random(-10, 10);
    this.vx = random(-10, 10);
    
    this.show = function(){
        this.x += this.vx;
        this.y += this.vy;

        if(this.y - this.r < 0) this.vy = -this.vy;
        if(this.x + this.r > width || this.x - this.r < 0) this.vx = -this.vx;

    }
    this.reset = function(){
        this.x = width/2;
        this.y = height/2;
        this.vy = random(-10, 10);
        this.vx = random(-10, 10);
    }
  }