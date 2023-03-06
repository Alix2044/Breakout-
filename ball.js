class Ball{

    constructor(){
    this.x = width/2;
    this.y = height/2;
    this.r = 15;
    this.vy = random(-10, 10);
    this.vx = random(-10, 10);
    }
 
    
    show(){
        fill(0, 69, 0);

        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
    move(){
        this.x += this.vx;
        this.y += this.vy;

    if(this.y - this.r >height || this.y+this.r<=0){
            this.vy = -this.vy;
        } 
 
       

        if(this.x - this.r > width || this.x - this.r < 0){
            this.vx = -this.vx;
        } 
          

    }
    show(){
        fill(0,255,0)
        circle(this.x, this.y, this.r)
    }
    reset(){
        this.x = width/2;
        this.y = height/2;
        this.vy = random(-10, 10);
        this.vx = random(-10, 10);
    }
  }