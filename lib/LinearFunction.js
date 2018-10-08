class LinearFunction {
  constructor(slope,intercept) {
    this.slope = slope;
    this.intercept = intercept;
  }
  calcY(x){
    return this.slope*x+this.intercept;
  }

  letTwoPointsDefineLine(A,B){
    this.slope = (B.y-A.y)/(B.x - A.x);
    this.intercept = A.y - this.slope*A.x;
  }

  draw(context){
    context.beginPath();
    context.moveTo(0,this.calcY(0));
    context.lineTo(canvas.width,this.calcY(canvas.width));
    context.closePath();
    context.stroke();
  }


}
