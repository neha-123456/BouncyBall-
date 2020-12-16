const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object;
function setup() {
  createCanvas(400,400);
 // createSprite(400, 200, 50, 50);
 engine=Engine.create();
 world=engine.world;
 var object_options={
 isStatic: true
 }
 object=Bodies.rectangle(200,100,50,50,object_options);
 World.add(world, object);
 console.log(object.position.x)
}

function draw() {
  background(0);  
  rectMode(CENTER)
  rect(200,200,30,30);
  Engine.update(engine);
  
 rect(object.position.x,object.position.y,50,50);
  drawSprites();
}