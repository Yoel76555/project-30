const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, ground2;
var block8,block9,block10,block11,block12,block14,block15,block16;
var block1,block2,block3,block4,block5,block6,block7,block17;
var Slingshot;
var polygon, polygonImage;

function preload(){
  polygonImage=loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;
  
  ground = new Ground(400,267,300,20);

  ground2 = new Ground(650,150,220,20);
  //leave two
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);

  block1 = new Box(590,120,30,40);
  block2 = new Box(680,120,30,40);
  block3 = new Box(710,120,30,40);
  block4= new Box(650,120,30,40);
  block5= new Box(620,120,30,40);
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  polygon = new Polygon(this.ball,{x:100,y:200});

 //Slingshot= new SlingShot(this.polygon,{x:100,y:200});
  //level three
  block13= new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);

  block6= new Box(680,80,30,40);
  block7= new Box(620,80,30,40);
  block17 = new Box(650,80,30,40);


  //top block
  block16 = new Box(390,155,30,40);
  block18 = new Box(650,40,30,40);
  
  

}

function draw() {
  background("gray");  
 

  polygon.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  ground.display();
  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block17.display();
  block18.display();
  imageMode(CENTER);
  image(polygonImage, ball.position.x, ball.position.y,40,40);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x:mouseX, y:mouseY});
}
function mouseReleased(){
  polygon.fly();
}
function keyPressed(){
   if(keyCode === 32){
     Slingshot.attach(this.polygon);
   }
}