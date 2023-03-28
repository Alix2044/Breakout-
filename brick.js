class Brick{
    constructor(x,y,r,g,b){
    this.w = width/13;
    this.h = this.w/4;
    this.x = x;
    this.y = y;
    this.active = true;   

    this.r = 100;

    this.r = r
    this.g = g
    this.b = b

    }
  
    show(){
        
        fill(this.r,this.g,this.b)
        if(this.active == true){
        rect(this.x,this.y,this.w,this.h);
    
        }
    }

    collision(b){

      
      
        if(this.active == true){
            var ballLeft = b.x - b.r;
            var ballRight = b.x + b.r;
            var ballTop = b.y - b.r;
            var ballBottom = b.y + b.r;
            
            if(!(ballLeft > this.x + this.w
                ||ballRight < this.x
                ||ballTop > this.y
                ||ballBottom < this.y + this.h)){
                    b.vy = -b.vy;
                    this.active = false;   
                    console.log("1");

            }
            if(!(ballLeft > this.x + this.w
                ||ballRight < this.x 
                ||ballTop > this.y + this.h 
                ||ballBottom < this.y + this.h)){
                    b.vy = -b.vy;
                  
                    return   this.active = false;  
            }
            if(!(ballLeft > this.x
                ||ballRight < this.x
                ||ballTop > this.y + this.h
                ||ballBottom < this.y)){
                    b.vx = -b.vx;
                  return this.active = false;  
                    
            }
            if(!(ballLeft > this.x + this.w
                ||ballRight < this.x + this.w
                ||ballTop > this.y + this.h
                ||ballBottom < this.y)){
                    b.vx = -b.vx;
                  return this.active = false;  
                
            }
        }
        return this.active
    }
}
    
