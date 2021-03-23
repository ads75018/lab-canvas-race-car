function random(minWidth, maxWidth) {
  // var minWidth=20;
  // var maxWidth=500;
 return Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
  // TODO
}
let obs=[];
class Obstacle {
  constructor(width,height,color,x,y) {
   this.width=width;
   this.height=height;
   this.color=color;
   this.x=x;
   this.y=y; // TODO
   this.draw()
  }
  
  draw() {

    ctx.fillStyle= this.color;
    ctx.fillRect(this.x,this.y,this.width,this.height); 
    // obs.push(new Obstacle(random(60,900),frames,'red',random(600,800),50));
    // console.log(obs);
  }
  
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }

  hits(car) {
    return (
      this.bottom() > car.top() &&
      this.top() < car.bottom() &&
      this.right() > car.left() &&
      this.left() < car.right()
    );// TODO
  }
}