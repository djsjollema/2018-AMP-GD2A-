class Point {
  constructor(x,y,color) {
    this.x = x;
    this.y = y;
    this.color = color || "rgba(155,255,0,0.4)";
  }

  draw(context){
    context.beginPath();
    context.fillStyle = this.color;
    context.lineWidth = 4;
    context.arc(this.x,this.y,20,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
  }
}
