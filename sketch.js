const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rec1,rec2,rec3,paper,ground,circle1,paper1,binImg

function preload(){

binImg = loadImage("dustbing.png")

}


function setup() {
	createCanvas(1600, 700);
	
	engine = Engine.create();
	world = engine.world;

	dustbin4 = createSprite(1360,580,5,5)
	dustbin4.addImage(binImg)
	dustbin4.scale=0.5


	ball1 = new ball(120,170,70,70)
	dustbin1 = new Dustbin(1300,630,10,200);
	dustbin2 = new Dustbin(620,670,110,10);
	dustbin3 = new Dustbin(1410,630,10,200);
	ground1 = new Ground(20,685,6000,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  ball1.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  
  ground1.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:295,y:-350});

	}
}
