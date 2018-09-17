class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  draw(){
    context.beginPath();
    context.fillStyle = "yellow";
    context.arc(this.x,this.y,20,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
  }
}
