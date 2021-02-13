
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
  mango2=new mango(1000,85,30);
	mango3=new mango(1010,200,30);
	mango4=new mango(900,175,30);
	mango5=new mango(1200,150,30);
	mango6=new mango(900,300,30);
  mango7=new mango(1225,300,30);
  mango8=new mango(1120,200,30);

    stoneObj=new stone(230,415);
	launcherObject=new launcher(stoneObj.body,{x:230,y:415});
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  stoneObj.display();
  groundObject.display();
  launcherObject.display();

  detectollition(stoneObj,mango1);
  detectollition(stoneObj,mango2);
  detectollition(stoneObj,mango3);
  detectollition(stoneObj,mango4);
  detectollition(stoneObj,mango5);
  detectollition(stoneObj,mango6);
  detectollition(stoneObj,mango7);
  detectollition(stoneObj,mango8);


}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
    launcherObject.attach(stoneObj.body);
  }
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
   launcherObject.fly();
}

function detectollition(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r)
  {
    Matter.Body.setStatic(lmango.body,false);
  }

}

