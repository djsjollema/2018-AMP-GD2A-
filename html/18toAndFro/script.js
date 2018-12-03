const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;


function setUp(){
  let myVector = new Vector2d(10,12);
  console.log(myVector, myVector.magnitude,myVector.angle);
  myVector.magnitude = 20;
  console.log(myVector, myVector.magnitude,myVector.angle);
  //animate();
}

// function animate(){
//   requestAnimationFrame(animate);
//   context.clearRect(0,0,1000,1000);
//   context.fillStyle = "rgba(255,255,255,0.2)";
// }

setUp();
