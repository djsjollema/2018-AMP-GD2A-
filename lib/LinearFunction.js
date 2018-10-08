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
  }


}
