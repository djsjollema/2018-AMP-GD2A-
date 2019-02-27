const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A,B,l,player;

function setUp(){
  A = new Point(100,200,20,"yellow");
  B = new Point(600,400,20,"yellow");
  A.drag(); B.drag();
  l = new LinearFunction(1,1);

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

  player.position.add(player.velocity);
  player.point.position(player.position);
  player.point.draw(context);


  l.letTwoPointsDefineLine(A,B);
  l.draw(context);

  A.draw(context);
  B.draw(context);
}

setUp();
