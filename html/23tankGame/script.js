class Tank {
  constructor() {
    this.sx;
    this.sy;
    this.sw = 32;
    this.sh = 32;
    this.pos = new Vector2d(100,100);
    this.vel = new Vector2d(6,7);
    this.w =64;
    this.h = 64;

    this.spriteSheet = new Image();
    this.spriteSheet.src = "Tanks_sheet.png";
    this.startFrame = 1;
    this.stopFrame = 9;
    this.counter = this.startFrame;
  }

  move(){
    this.pos.add(this.vel);
    this.counter++;
    if(this.counter >= this.stopFrame){
      this.counter = this.startFrame
    }
    this.sx = this.counter % 8 * 32;
    this.sy = Math.floor(this.counter/8)* 32;
    if(this.pos.dx < 0){
      this.pos.dx = canvas.width;
    }
    if(this.pos.dx > canvas.width){
      this.pos.dx = 0;
    }
    if(this.pos.dy < 0){
      this.pos.dy = canvas.height;
    }
    if(this.pos.dy > canvas.height){
      this.pos.dy = 0;
    }
  }

  draw(){
    context.drawImage(this.spriteSheet,this.sx,this.sy,this.sw,this.sh,this.pos.dx,this.pos.dy,64,64);
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
    startTime = new Date();
    greenTank.move();

  }
  greenTank.draw();

}

setUp();
