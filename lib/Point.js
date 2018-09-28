class Point {
  constructor(x,y,r,color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color || "rgba(155,255,0,0.4)";
  }

  draw(context){
    context.beginPath();
    context.fillStyle = this.color;
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.arc(this.x,this.y,this.r,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
  }

  print(context,text){
    context.fillStyle = "black";
    context.font = "14px Arial";
    context.fillText(text,this.x+this.r +8,this.y+this.r+10);
  }

  position(pos){
    this.x = pos.dx;
    this.y = pos.dy;
  }
}
