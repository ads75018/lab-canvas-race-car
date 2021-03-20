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

  moveLeft() {
    // TODO
  }
  moveRight() {
    // TODO
  }
}