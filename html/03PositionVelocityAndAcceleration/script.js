const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let kineticObject = {};
let kineticObject2 = {};
let kineticObject3 = {};

function setUp(){
  kineticObject.point = new Point(200,300,10,"red");
  kineticObject.pos = new Vector2d(800,300);
  kineticObject.vel = new Vector2d(8,5);
  kineticObject.acc = new Vector2d(0,1);

  kineticObject2.point = new Point(200,300,15,"yellow");
  kineticObject2.pos = new Vector2d(200,300);
  kineticObject2.vel = new Vector2d(-2,5);
  kineticObject2.acc = new Vector2d(0,0.5);

  kineticObject3.point = new Point(200,300,15,"blue");
  kineticObject3.pos = new Vector2d(200,10);
  kineticObject3.vel = new Vector2d(8,0);
  kineticObject3.acc = new Vector2d(0,0.2);
  //kineticObject.point.position(kineticObject.pos);
  //kineticObject.point.draw(context);
  update();
}

function update(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(update);

  context.beginPath();
  context.lineWidth =1 ;
  context.fillStyle = "rgba(255,0,0,0.2)";
  context.moveTo(kineticObject.pos.dx,kineticObject.pos.dy);
  context.lineTo(kineticObject2.pos.dx,kineticObject2.pos.dy);
  context.lineTo(kineticObject3.pos.dx,kineticObject3.pos.dy);
  context.closePath();
  context.stroke();
  context.fill();

  if(kineticObject.pos.dx<0 || kineticObject.pos.dx > canvas.width){
    kineticObject.vel.dx = -kineticObject.vel.dx;
  }
  if(kineticObject.pos.dy > canvas.height){
    kineticObject.pos.dy = canvas.height;
    kineticObject.vel.dy = -kineticObject.vel.dy;
  }
  kineticObject.vel.add(kineticObject.acc);
  kineticObject.pos.add(kineticObject.vel);
  kineticObject.point.position(kineticObject.pos);
  kineticObject.point.draw(context);

  if(kineticObject2.pos.dx<0 || kineticObject2.pos.dx > canvas.width){
    kineticObject2.vel.dx = -kineticObject2.vel.dx;
  }

  if(kineticObject2.pos.dy > canvas.height){
    kineticObject2.pos.dy = canvas.height;
    kineticObject2.vel.dy = -kineticObject2.vel.dy;
  }
  kineticObject2.vel.add(kineticObject2.acc);
  kineticObject2.pos.add(kineticObject2.vel);
  kineticObject2.point.position(kineticObject2.pos);
  kineticObject2.point.draw(context);

  if(kineticObject3.pos.dx<0 || kineticObject3.pos.dx > canvas.width){
    kineticObject3.vel.dx = -kineticObject3.vel.dx;
  }

  if(kineticObject3.pos.dy > canvas.height){
    kineticObject3.pos.dy = canvas.height;
    kineticObject3.vel.dy = -kineticObject3.vel.dy;
  }
  kineticObject3.vel.add(kineticObject3.acc);
  kineticObject3.pos.add(kineticObject3.vel);
  kineticObject3.point.position(kineticObject3.pos);
  kineticObject3.point.draw(context);


}

setUp();

function getRandomNumber(max){
  return Math.random()*max;
}
