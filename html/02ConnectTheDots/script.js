const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;
let myPoints = [];

function setUp(){
  for (let i = 0; i <8; i++) {
    let point = new Point(30+getRandomNumber(canvas.width-60),30+getRandomNumber(canvas.height-60),"#" + Math.floor(getRandomNumber(255*255*255)).toString(16));
    myPoints.push(point);
  }
  update();
}

function update(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(update);

  context.beginPath();
  context.strokeStyle = "gray";
  context.moveTo(myPoints[0].x,myPoints[0].y);
  for (var i = 0; i < myPoints.length; i++) {
    context.lineTo(myPoints[i].x,myPoints[i].y);
  }
  context.closePath();
  context.stroke();

  for (var i = 0; i < myPoints.length; i++) {
    myPoints[i].draw(context);
    myPoints[i].print(context,i);
  }

}

setUp();

function getRandomNumber(max){
  return Math.random()*max;
}
