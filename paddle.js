

class Paddle {
    constructor(){
    this.w = 140;
    this.h = 20;
    this.x = width/2;
    this.y = height-100;
    }
    show(){
        fill(0,255,0)
        rect(this.x,this.y,this.w,this.h);
    }
    collision(b){
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

    }

}