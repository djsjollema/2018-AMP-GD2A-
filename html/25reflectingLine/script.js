const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A,B,l;

function setUp(){
  A = new Point(100,200,20,"yellow");
  B = new Point(600,400,20,"yellow");
  l = new LinearFunction(1,1);

  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  A.draw(context);
  B.draw(context);
  l.draw(context);
}

setUp();
