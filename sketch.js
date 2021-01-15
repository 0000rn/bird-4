

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.constraint;

var engine,world;
var box1,pig1;
var backgroundimg,platform;
var bird,slingshot;

function preload() {
    backgroundimg = loadImage("sprites/bg.png");   
}

function setup() {
  var canvas = createCanvas (1200,400) ;
  engine = Engine.create()
  World= engine.world;

  ground = new Ground (600,height,1200,20);
  platform = new Ground (150, 305, 300, 170);

  box1 = new Box  (700,320,70,70);
  box2 = new Box  (920,320,70,70);
  box3 = new Box  (700,240,70,70);
  box4 = new Box  (920,240,70,70);
  box5 = new Box  (810,160,70,70);

  pig1= new Pig (810, 350);
  pig2 = new Pig (810, 220);

  log1 = new Log (810,260,300, PI/2);
  log2 = new Log (810,180,300, PI/2);
  log3 = new Log (760,120,150, PI/7);
  log4 = new Log (870,120,150, -PI/7);

  bird = new Bird (100,100);

  slingshot=new SlingShot(bird.body,{x:200, y:100})
  
}

function draw() {
 background(backgroundImg)
Engine.update(engine)
strokeweight(4);
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

ground.display();
platform.display();

pig1.display();
pig2.display();

log1.display();
log2.display();
log3.display();
log4.display();

bird.display();

slingshot.display();
}

function mouseDragged () {
Matter.Body.setPosition(bird.body, {x: mouseX,y: mouseY });
}

function mouseReleased (){
    slingshot.fly();
}