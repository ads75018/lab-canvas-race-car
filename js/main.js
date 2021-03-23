let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector("canvas").getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  // 
  // tracer de la route
  //
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, 1000, 1600);
  ctx.fill();
  ctx.fillStyle = "grey";
  ctx.fillRect(50, 0, 900, 1600);
  ctx.fillStyle = "white";
  ctx.fillRect(70, 0, 20, 1600);
  ctx.fillRect(910, 0, 20, 1600);
  for(let y = 0; y < 1600; y+= 90) {
    ctx.fillRect(485, 20 + y , 10, 50);
  }
  console.log('afficher la voiture');
  // tracée de la voiture
  car.draw();
  // document.addEventListener('keydown', (e) => {
  //   switch (e.keyCode) {
  //     case 37: // left arrow
  //     car.moveLeft();
  //     break;
  //   case 39: // right arrow
  //    car.moveRight();
  //     break;
  // }
  // });
  // document.addEventListener('keyup', (e) => {
  //   car.moveLeft = 0;
  //   car.moveRight= 0;
  // });
  document.onkeydown = function (event) {
    console.log('touche appuyee', event)
    switch (event.key){
      case 'ArrowLeft':
        car.moveLeft();
        // deplacer en gauche
        break;
      case 'ArrowRight':
        car.moveRight()
        // deplacer en droite
        break;
    }
  }
  //
  // Iteration #4: obstacles
  
  obstacles.draw();
  for (i = 0; i < myObstacle.length; i++) {
    myObstacle[i].y += +5;
    myObstacle[i].draw();
    
  }
  
  // TODO

  //
  // Iteration #5: collisions
  for(let obstacles of myObstacle){
if (obstacles.hits(car)) {
  console.log('toucher')
  return true
  };
}
  // TODO

  //
  // Iteration #6: points
  //

  // TODO
}




document.onkeydown = function (e) {
  if (!car) return;

  // TODO
};




var raf;
let frames = 0;
const myObstacle=[];


function animLoop() {
  frames++;
if(frames %250===0){
  obstacles=new Obstacle(random(100,600),70,'red',random(50,400),50);
  myObstacle.push(obstacles);
}


  draw();

  if(obstacles.hits(car)===true){
   
    img=document.createElement('img')
    img.src="https://images-na.ssl-images-amazon.com/images/I/81x9V95MoaL._AC_SL1500_.jpg"
    img.onload=()=>{
      ctx.clearRect(0,0,W,H);
      ctx.drawImage(img,0,255,900,720)
    }
    return  cancelAnimationFrame(animLoop);
   }

  if (!gameover) {
    return requestAnimationFrame(animLoop);

}

}




function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }
  obstacles=new Obstacle();
  car = new Car();

 

  
  animLoop();
}

document.getElementById("start-button").onclick = function () {
  startGame();
  
};

// auto-start










  // let x = 0;
  // setInterval(function() {
  //   ctx.fillStyle = "white";
  //   ctx.clearRect(485, 0 + x, 10, 50);
  //   ctx.fillRect(485, 0 + x, 10, 50);
  //   x++;
  // }, 16);
  
  // setInterval()

  // function clearCanvas() {
  //  // ctx.clearRect(0, 0, 1000, 1600);
  // }

  // function drawLine() {
  //   ctx.fillStyle = "white";
  //   ctx.fillRect(485, 0 + x, 10, 50);
  // }
  // let x = 0;
/*
  function animation() {
    x += 120;
    clearCanvas()
    drawLine();
    requestAnimationFrame(animation);
  }

  animation();
  animation();
  animation();
  animation();
  animation();
  animation()
  */

 

  // Iteration 1: road drawing
  //


