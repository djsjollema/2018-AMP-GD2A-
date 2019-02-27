const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A,B,l,m,player,S,i,j;

function setUp(){
  A = new Point(100,200,20,"yellow");
  B = new Point(600,400,20,"yellow");
  S = new Point(600,400,10,"white");
  A.drag(); B.drag();
  l = new LinearFunction(1,1);
  m = new LinearFunction(1,1);

  i = new Vector2d(1,1);
  j = new Vector2d(-1,1);

  player = {};
  player.position = new Vector2d(400,400);
  player.velocity = new Vector2d(3,4);
  player.point = new Point(player.position.dx,player.position.dy,30,"red");

  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);

  if(player.position.dx < player.point.r || player.position.dx > canvas.width - player.point.r){
    player.velocity.dx = -player.velocity.dx;
  }

  if(player.position.dy < player.point.r || player.position.dy > canvas.height - player.point.r){
    player.velocity.dy = -player.velocity.dy;
  }

  player.velocity.draw(context,player.position.dx,player.position.dy,30);


  player.position.add(player.velocity);
  player.point.position(player.position);
  player.point.draw(context);


  l.letTwoPointsDefineLine(A,B);
  l.draw(context);

  m.slope = -1/l.slope;
  m.intercept = player.position.dy - player.position.dx * m.slope;




  A.draw(context);
  B.draw(context);

  m.draw(context);

  S.x = l.intersection(m).x;
  S.y = l.intersection(m).y;

  S.draw(context);

  i.dx = 1;
  i.dy = l.slope;

  j.dx = 1;
  j.dy = m.slope;


  i.draw(context,player.position.dx,player.position.dy,50);
  j.draw(context,player.position.dx,player.position.dy,50);

}

setUp();
