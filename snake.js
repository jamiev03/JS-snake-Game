//get the canvas element
window.onload = () => {
const gameCanvas = document.querySelector('#gameCanvas'); 
const ctx = gameCanvas.getContext("2d");

document.addEventListener('keydown', keyDownEvent);

 // render X times per second
 let x = 8;
 setInterval(draw, 1000 / x);
};

function keyDownEvent(e) {
    switch (e.keyCode) {
    case 37:
      nextX = -1;
      nextY = 0;
      break;
    case 38:
      nextX = 0;
      nextY = -1;
      break;
    case 39:
      nextX = 1;
      nextY = 0;
      break;
    case 40:
      nextX = 0;
      nextY = 1;
      break;
    }
  }