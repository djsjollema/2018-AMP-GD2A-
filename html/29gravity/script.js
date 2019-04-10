const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let moon = {}, earth = {};
let distanceMoonEarth = 1;

function setUp(){
  earth.pos = new Vector2d(canvas.width/2,canvas.height/2);
  earth.point = new Point(earth.pos.dx,earth.pos.dy,50,"lightblue");

  moon.pos = new Vector2d(canvas.width/4,canvas.height/2);
  moon.vel = new Vector2d(0,1);
  moon.acc = new Vector2d(0,0);
  moon.point = new Point(moon.pos.dx,moon.pos.dy,20,"white");

  animate();
}

function animate(){

  requestAnimationFrame(animate);
  context.fillStyle = "rgba(25,25,112,0.05)";
  context.fillRect(0,0,canvas.width,canvas.height);

  moon.pos.add(moon.vel);
  moon.acc.differenceVector(earth.pos,moon.pos);
  distanceMoonEarth = moon.acc.magnitude;
  moon.acc.magnitude = 1000/(distanceMoonEarth*distanceMoonEarth);

  moon.vel.add(moon.acc);


  earth.point.draw(context);
  moon.point.position(moon.pos);
  moon.point.draw(context);

  //moon.acc.draw(context,moon.pos.dx,moon.pos.dy,1);
}

setUp();
