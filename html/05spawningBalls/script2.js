const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let kineticObjects = [];

for(let i = 0; i<10; i++){
  let kineticObject = {};
  kineticObject.point = new Point(0,100,20,"red");
  kineticObject.pos = new Vector2d(getRandomNumber(0,canvas.width),100);
  kineticObject.vel = new Vector2d(0,2);
  kineticObjects.push(kineticObject);
}

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height)
  requestAnimationFrame(animate);


  for (var i = 0; i < kineticObjects.length; i++) {
    kineticObjects[i].pos.add(kineticObjects[i].vel);
    kineticObjects[i].point.position(kineticObjects[i].pos);
    kineticObjects[i].point.draw(context);
  }

}

animate();

function getRandomNumber(min,max){
  return Math.floor(Math.random()*(max-min) + min);
}
