const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let background = new Image();
background.src = "street.png";

let frontWheel = new Image();
frontWheel.rot = 0;
frontWheel.src = "wheel.png";
frontWheel.pos =0;
frontWheel.vel = 10;

background.addEventListener('load',()=>{
  animate();
})

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  context.drawImage(background,0,0,canvas.width,canvas.height);
  context.save();
  context.translate(frontWheel.pos,600);
  context.rotate(frontWheel.rot);
  context.drawImage(frontWheel,-frontWheel.width/2,-frontWheel.height/2);
  context.restore();
  frontWheel.rot += frontWheel.vel/80;
  frontWheel.pos += frontWheel.vel;
  if(frontWheel.pos>canvas.width){
    frontWheel.pos = 0;
  }
}
