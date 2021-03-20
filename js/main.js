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
  // tracée de la voiture
  car.draw()

  //
  // Iteration #4: obstacles
  //

  // TODO

  //
  // Iteration #5: collisions
  //

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

let raf;
let frames = 0;
function animLoop() {
  frames++;

  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }
  car = new Car();

  // TODO

  animLoop();
}

document.getElementById("start-button").onclick = function () {
  startGame();
};

// auto-start
startGame();









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


