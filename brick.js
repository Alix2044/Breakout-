function Brick() {
    this.w = 20;
    this.h = 140;
    this.x = width/2;
    this.y = height/2 - this.h/2;
    this.show = function(){
        fill(0,255,0)
        rect(this.x,this.y,this.w,this.h);
        }

    this.collision = function(b){
        if(this.active == true){
            var ballLeft = b.x - b.r;
            var ballRight = b.x + b.r;
            var ballTop = b.y - b.r;
            var ballBottom = b.y + b.r;
            
            if(!(ballLeft > this.x + this.w
                ||ballRight < this.x
                ||ballTop > this.y
                ||ballBottom < this.y)){
                    b.vy = -b.vy
                    this.active = false;     
            }
            if(!(ballLeft > this.x + this.w
                ||ballRight < this.x 
                ||ballTop > this.y + this.h 
                ||ballBottom < this.y + this.h)){
                    b.vy = -b.vy
                    this.active = false;  
            }
            if(!(ballLeft > this.x
                ||ballRight < this.x
                ||ballTop > this.y + this.h
                ||ballBottom < this.y)){
                    b.vx = -b.vx
                    this.active = false;  
            }
            if(!(ballLeft > this.x + this.w
                ||ballRight < this.x + this.w
                ||ballTop > this.y + this.h
                ||ballBottom < this.y)){
                    b.vx = -b.vx
                    this.active = false;  
            }
        }
    }
}