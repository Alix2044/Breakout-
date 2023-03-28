class Ball{

    constructor(){
    this.x = width/2;
    this.y = height/2;
    this.r = 15;
    this.start = -7;
    this.slut = 7;
    this.vy = random(this.start,this.slut);
    this.vx = random(this.start,this.slut);
    this.c = (random(255),random(255),random(255))
    }
 
    

    move(){
        this.x += this.vx;
        this.y += this.vy;

    if(this.y<0){
            this.vy = -this.vy;
        } 
 
       

        if(this.x > width || this.x - this.r < 0){
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