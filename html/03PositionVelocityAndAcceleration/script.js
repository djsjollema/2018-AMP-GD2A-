const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let kineticObject = {};

function setUp(){
  kineticObject.point = new Point(200,300,"red");
  kineticObject.pos = new Vector2d(800,300);
  kineticObject.point.position(kineticObject.pos);
  kineticObject.point.draw(context);
  //update();
}

function update(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(update);
}

setUp();

function getRandomNumber(max){
  return Math.random()*max;
}
