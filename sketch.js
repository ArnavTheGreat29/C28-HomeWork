

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var boy, boyImage, render;

function preload()
{
  boyImage = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

 
render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });


  boy = createSprite(250,600,100,100)
  boy.addImage(boyImage)
  boy.scale = 0.1

	//Create the Bodies Here.
  ground = new Ground(400,675,1000,20);
	tree = new Tree(600,100,100,100)
  stone = new Stone(200,550,200,200)
  mango1 = new Mango(600,500,30,50)
  mango2 = new Mango(550,500,30,50)
  mango3 = new Mango(650,510,30,50)
  mango4 = new Mango(600,450,30,50)
  mango5 = new Mango(650,450,30,50)
  thrower = new Thrower(stone.body,{x:200, y:550})
 
 
	Engine.run(engine);
  Render.run(render);
	
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display()
  tree.display()
  stone.display()
  
  
  keyPressed()
 
 
  mango1.display()
  detectCollision(stone,mango1)
  mango2.display()
  detectCollision(stone,mango2)
  mango3.display()
  detectCollision(stone,mango3)
  mango4.display()
  detectCollision(stone,mango4)
  mango5.display()
  detectCollision(stone,mango3)
  thrower.display()

  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  thrower.throw();
}

function detectCollision(Lstone,Lmango){
mangoPos = Lmango.body.position
stonePos = Lstone.body.position

  var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y)
 console.log(Lmango,Lstone,distance)
   if(distance <= 30 +30){

    console.log("Hi")
    Matter.Body.setStatic(Lmango.body,false)
   }
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:200,y:550})
    thrower.attach(stone.body)
	}
	
	
	}


