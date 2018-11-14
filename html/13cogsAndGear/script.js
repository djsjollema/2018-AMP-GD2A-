const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let cog = new Image();
cog.src = "gear_12.png";
cog.rotation = 0;

let cog1 = new Image();
cog1.src = "gear_12.png";
cog1.rotation = 0.27;

cog.addEventListener('load',()=>{
  animate();
})

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);

  context.save();
  context.translate(400,300);
  context.rotate(cog.rotation);
  context.drawImage(cog,-0.5*cog.width,-0.5*cog.height);
  context.restore();

  context.save();
  context.translate(850,300);
  context.rotate(cog1.rotation);
  context.drawImage(cog1,-0.5*cog1.width,-0.5*cog1.height);
  context.restore();
  cog.rotation += 0.01;
  cog1.rotation -= 0.01;
}
