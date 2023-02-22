

function Paddle() {
this.w = 20;
this.h = 140;
this.x = width/2;
this.y = height/2 - this.h/2;

this.show = function(){
fill(0,255,0)
rect(this.x,this.y,this.w,this.h);
}
this.collision = function(b){
    var ballLeft = b.x - b.r;
    var ballRight = b.x + b.r;
    var ballTop = b.y - b.r;
    var ballBottom = b.y + b.r;

    if(!(ballLeft>this.x+this.w||
        ballRight<this.x ||
        ballTop> this.y + this.height ||
        ballBottom < this.y)){
            b.vy = -b.vy

    }

}

}