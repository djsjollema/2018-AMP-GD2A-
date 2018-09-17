const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



for (var i = 0; i < 1000; i++) {
  let myPoint = new Point(getRandomNumber(canvas.width),getRandomNumber(canvas.height));
  myPoint.draw();
}

function getRandomNumber(max){
  return Math.random()*max;
}
