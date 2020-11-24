 
//namespacing

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var box1,box2,box3,box4,box5;
var ground
var pig1,pig2;
var log1,log2;
var bird;
var backgroundImg;

function preload(){
  backgroundImg=loadImage("sprites/bg.png")
}


function setup() {
  var canvas = createCanvas(1600,500);
  engine = Engine.create();
  world = engine.world;
  
  box1 = new Box(700,380,70,70);
 box2 = new Box(920,380,70,70);
 pig1 = new Pig(810,410);
 log1 = new Log(810,320,300,PI/2);
 
 box3 = new Box(700,300,70,70);
 box4 = new Box(920,300,70,70);
 pig2 = new Pig(810,280);
 log2 = new Log(810,240,300,PI/2);
 
 box5 = new Box (810,210,70,70)
 log3 = new Log (760,180,150,PI/7)
 log4 = new Log (870,180,150,-PI/7)

 ground = new Ground(600,height,1600,20);

 bird = new Bird(100,100)

}
function draw() {
  background(backgroundImg); 
  Engine.update(engine);

  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();

  bird.display();
}