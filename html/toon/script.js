const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let nodes= [];

let player = {};
let speed = 10;

let numNodes = 3;
function setUp(){
  for (var i = 0; i < numNodes; i++) {
    let node = {};
    node.point = new Point(getRandom(canvas.width),getRandom(canvas.height),10,"red");
    node.pos = new Vector2d(node.point.x,node.point.y);
    nodes.push(node);
  }
  player.pos = new Vector2d(nodes[0].point.x,nodes[0].point.y);
  player.vel = new Vector2d(0,0);
  player.point = new Point(player.pos.dx,player.pos.dy,15,"yellow");
  player.target = 1;

  animate();
}

function animate(){
  requestAnimationFrame(animate);
  // context.clearRect(0,0,1000,1000);
  context.fillStyle = "rgba(255,255,255,0.2)";
  context.fillRect(0,0,canvas.width,canvas.height);
  drawGraph();
  drawNodes();
  player.point.position(player.pos)
  player.pos.add(player.vel);
  player.vel.differenceVector(nodes[player.target].pos,player.pos);
  player.vel.magnitude = speed;

  player.point.draw(context);
  player.vel.draw(context,player.pos.dx,player.pos.dy,10);

  if(player.point.distanceToOtherPoint(nodes[player.target].point) < speed){
    player.target++;
    if(player.target == numNodes){
      player.target = 0;
    }
  }
}

function drawNodes(){
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].point.draw(context);
  }
}

function drawGraph(){
  context.beginPath();
  context.moveTo(nodes[0].point.x,nodes[0].point.y);
  for (var i = 1; i < nodes.length; i++) {
    context.lineTo(nodes[i].point.x,nodes[i].point.y);
  }
  context.closePath();
  context.stroke();
}

function getRandom(max){
  return Math.floor(Math.random()*max);
}

setUp();
