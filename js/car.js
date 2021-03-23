class Car {
  constructor() {
    const img = document.createElement('img');
    img.src = "images/car.png"
    img.onload = () => {
      this.img = img;
      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.w = 100;
      this.h = this.w/imgRatio;
      this.x = W / 2 - this.w /2
      this.y = H - this.h - 50
      this.draw()
    }
  }

  draw() {
    console.log('hello', this.img)
    if (!this.img) return;
    console.log("coucou")
    ctx.drawImage(this.img, this.x, this.y, this.w,this.h) 
    // TODO
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.w;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.h;
  }

  moveLeft() {
    this.x-=6;
    this.draw();
    // TODO
  }
  moveRight() {
    this.x+=6;
    this.draw();
    // TODO
  }
}