const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let planets = [];
let numberOfPlanets = 20;

function setUp(){
  for(let i = 0; i<numberOfPlanets; i++){
    let planet = {};
    planet.pos = new Vector2d(Math.random()*canvas.width,Math.random()*canvas.height);
    planet.vel = new Vector2d(0,0);
    planet.mass = Math.random()*5;
    planet.acc = new Vector2d(0,0);
    planet.point = new Point(planet.pos.dx,planet.pos.dy,30/Math.sqrt(planet.mass),"white");
    planet.rads = [];
    planets.push(planet);
  }
  planets.sort(function(a,b){
    return a.mass-b.mass;
  })
  animate();
}

function animate(){

  requestAnimationFrame(animate);
  //context.fillStyle = "rgba(25,25,112,0.1)";
  //context.fillRect(0,0,canvas.width,canvas.height);
  context.clearRect(0,0,canvas.width,canvas.height);

  for(let i=0; i<planets.length; i++){
    planets[i].rads = [];
    for(let j = 0; j<planets.length;j++){
      if(i != j){
        let rad = new Vector2d(0,0);
        rad.differenceVector(planets[j].pos,planets[i].pos)
        planets[i].rads.push(rad);
      }
    planets[i].acc = new Vector2d(0,0);
    for(let k=0; k<planets[i].rads.length;k++){
     //planets[i].rads[k].draw(context,planets[i].pos.dx,planets[i].pos.dy,1);
      planets[i].acc.add(planets[i].rads[k]);

    }

    }
    //planets[i].vel.add(planets[i].acc);
    planets[i].acc.magnitude *= 0.000001;
    planets[i].acc.mul(planets[i].mass);

    planets[i].vel.add(planets[i].acc);
    planets[i].pos.add(planets[i].vel);
    planets[i].point.position(planets[i].pos);


    planets[i].point.draw(context);
    planets[i].acc.draw(context,planets[i].pos.dx,planets[i].pos.dy,5000,"yellow");


  }
}

setUp();
