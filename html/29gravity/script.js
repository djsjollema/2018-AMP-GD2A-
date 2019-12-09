
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let moon = {}, earth = {};
let distanceMoonEarth = 1;

function setUp(){
  earth.pos = new Vector2d(canvas.width/2,canvas.height/2);
  earth.vel = new Vector2d(0,0);
  earth.acc = new Vector2d(0,0);
  earth.point = new Point(earth.pos.dx,earth.pos.dy,20,"lightblue");

  moon.pos = new Vector2d(canvas.width/4,canvas.height/2);
  moon.vel = new Vector2d(0,1);
  moon.acc = new Vector2d(0,1);
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

  moon.acc.magnitude = 3000/(distanceMoonEarth*distanceMoonEarth);
  moon.vel.add(moon.acc);

  earth.acc.differenceVector(moon.pos,earth.pos);
  earth.acc.magnitude = 1000/(distanceMoonEarth*distanceMoonEarth);
  earth.vel.add(earth.acc);
  earth.pos.add(earth.vel);

  earth.point.position(earth.pos);
  earth.point.draw(context);

  moon.point.position(moon.pos);
  moon.point.draw(context);

  //moon.acc.draw(context,moon.pos.dx,moon.pos.dy,1);
  if(earth.pos.dx < earth.point.r || earth.pos.dx > canvas.width - earth.point.r){
    earth.vel.dx = - earth.vel.dx;
  }

  if(earth.pos.dy < earth.point.r || earth.pos.dy > canvas.height - earth.point.r){
    earth.vel.dy = - earth.vel.dy;
  }

}

setUp();
