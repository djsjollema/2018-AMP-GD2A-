const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(100,100,15,"red");
let B = new Point(800,300,15,"blue");
let C = new Point(600,100,15,"yellow");
let D = new Point(500,400,15,"green");

let S = new Point(0,0,10,"white");

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);


A.drag();
B.drag();
C.drag();
D.drag();

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);

  l.letTwoPointsDefineLine(A,B);
  m.letTwoPointsDefineLine(C,D);

  l.draw(context);
  m.draw(context);

  S.x = l.intersection(m).x;
  S.y = l.intersection(m).y;

  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);

  S.draw(context);

  A.print(context,"A");
  B.print(context,"B");
  C.print(context,"C");
  D.print(context,"D");
}

animate();
