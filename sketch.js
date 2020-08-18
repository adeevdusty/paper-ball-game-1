
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var paper1
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boxPosition = width/2-10;
	boxY=600
	boxleftSprite=createSprite(boxPosition+200, boxY, 20,100);
	 boxleftSprite.shapeColor=color(255,0,0);
	  boxLeftBody = Bodies.rectangle(boxPosition+200, boxY, 20,100 , {isStatic:true} );
	   World.add(world, boxLeftBody);

	   boxrightSprite=createSprite(boxPosition+300, boxY, 20,100);
	 boxrightSprite.shapeColor=color(255,0,0);
	  boxrightBody = Bodies.rectangle(boxPosition+300, boxY, 20,100 , {isStatic:true} );
	   World.add(world, boxrightBody);

	   boxbottomSprite=createSprite(boxPosition+240, boxY+40,100,20);
	 boxbottomSprite.shapeColor=color(255,0,0);
	  boxbottomBody = Bodies.rectangle(boxPosition+240, boxY+40, 100,20 , {isStatic:true} );
	   World.add(world, boxbottomBody);

	   paper1 = new Paper(100,100,20);
	   ground = new Ground(600,height,1200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display()
  ground.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-50});
	}
}



