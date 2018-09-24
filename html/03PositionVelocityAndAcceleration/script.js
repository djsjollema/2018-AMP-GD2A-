const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

function setUp(){
  update();
}

function update(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(update);
}

setUp();

function getRandomNumber(max){
  return Math.random()*max;
}
