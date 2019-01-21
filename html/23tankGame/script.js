class Tank {
  constructor() {
    this.sx;
    this.sy;
    this.sw = 32;
    this.sh = 32;
    this.x = 0;
    this.y = 0;
    this.w =64;
    this.h = 64;
    this.counter = 0;
    this.spriteSheet = new Image();
    this.spriteSheet.src = "Tanks_sheet.png";
  }

  move(){
    this.counter++;
    this.sx = this.counter % 8 * 32;
    this.sy = Math.floor(this.counter/8)* 32;
  }

  draw(){
    context.drawImage(this.spriteSheet,this.sx,this.sy,this.sw,this.sh,this.x,this.y,64,64);
  }
}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let startTime,currentTime,dt,fps;
let greenTank;



function setUp(){
  startTime = new Date(); // set starttime
  fps = 10; //frames per second
  greenTank = new Tank();
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
    greenTank.move();

  }
  greenTank.draw();

}

setUp();
