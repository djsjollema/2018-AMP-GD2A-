class Point {
  constructor(x,y,color) {
    this.x = x;
    this.y = y;
    this.color = color || "rgba(155,255,0,0.4)";
  }

  draw(context){
    context.beginPath();
    context.fillStyle = this.color;
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.arc(this.x,this.y,20,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
  }

  print(context,text){
    context.fillStyle = "black";
    context.font = "30px Arial";
    context.fillText(text,this.x+25,this.y+10);
  }
}
