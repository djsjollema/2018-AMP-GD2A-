const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let startTime,currentTime,dt,fps;

function setUp(){
  startTime = new Date(); // set starttime
  fps = 1; //frames per second
  update();
}


function update(){
  requestAnimationFrame(update);
  context.clearRect(0,0,canvas.width,canvas.height);
  currentTime = new Date();
  dt = (currentTime - startTime)/1000;
  if(dt >  1/fps){
    console.log(dt);
    startTime = new Date();
  }
}

setUp();
