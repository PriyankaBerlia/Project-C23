const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground1,ground_body;
var helicopter,helicopter_body,helicopter_img;
var packet,packet_body,packet_img;
var box2,box3,box4;

function preload(){
	helicopter_img = loadImage("helicopter.png");
	packet_img = loadImage("package.png");
}

function setup(){

	createCanvas(600,400);
	engine = Engine.create();
	world = engine.world;

	ground_body = new ground();

	helicopter = new helicopterC();

	packet = new packetC();
	
	//packet = Bodies.rectangle(400,100,20,20,{isStatic : true});


	box2 = new box(400,280,20,100);
	box3 = new box(200,280,20,100);
	box4 = new box(220,350,180,20);
}

function draw(){

	background(0);
	Engine.update(engine);

	ground_body.display();

	packet.display();

	helicopter.display();

	box2.display();
	box3.display();
	box4.display();

	drawSprites();
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
  
	  helicopter.x=helicopter.x-20;   
	  translation={x:-20,y:0}
	  Matter.Body.translate(packet.body, translation)
  
  
	} else if (keyCode === RIGHT_ARROW) {
	  helicopter.x=helicopter.x+20;
	  translation={x:20,y:0}
	  Matter.Body.translate(packet.body, translation)
	}
	else if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(packet.body,false);
	  
	}
  }