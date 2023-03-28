

class Paddle {
    constructor(){
    this.w = 140;
    this.h = 20;
    this.x = width/2;
    this.y = height-25;
    }
    show(){
        fill(0,255,20)
        rect(this.x,this.y,this.w,this.h);
       /* if (this.x+this.w>400){
            this.x-=this.w
        }
        */
    }
    collision(b){
        /*
        var ballLeft = b.x - b.r;
        var ballRight = b.x + b.r;
        var ballTop = b.y - b.r;
        var ballBottom = b.y + b.r;

        if(!(ballLeft > this.x + this.w
            ||ballRight < this.x 
            ||ballTop> this.y + this.height
            ||ballBottom < this.y)){
                b.vy = -b.vy

        }
        */
       if (b.x + b.r > this.x &&
            b.x - b.r < this.x + this.w &&
            b.y + b.r > this.y) {
          // Collision detected, change ball direction
          b.vy = -b.vy ;
    

            }
        
              
    /* 
       
        if(!(ballLeft > this.x
            ||ballRight < this.x
            ||ballTop > this.y + this.h
            ||ballBottom < this.y)){
                b.vx = -b.vx;
             
                
        }
        if(!(ballLeft > this.x + this.w
            ||ballRight < this.x + this.w
            ||ballTop > this.y + this.h
            ||ballBottom < this.y)){
                b.vx = -b.vx;
       
            
        }

        if(!(ballLeft > this.x + this.w
            ||ballRight < this.x 
            ||ballTop > this.y + this.h 
            ||ballBottom < this.y + this.h)){
                b.vy = -b.vy;
              
     
        }
        */
    }
}


    

