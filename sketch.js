const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;
//let q = Math.random(450, height - 300);

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
//create a player object from the Player class.
player = new Player(playerBase.body.position.x,playerBase.body.position.y-153,90,190);
World.add(world,player);


  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    200000,
    0.001
  );
  computer = new Computer(
    computerBase.body.position.x,
    computerBase.body.position.y - 153,
    90,
    190
  );

  
}

function draw() {
  background(189);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
//call the display() function for the player object.
  player.display();

  computerBase.display();
  computer.display();
  

}
