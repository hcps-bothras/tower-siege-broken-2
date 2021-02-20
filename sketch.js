const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;


function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground (400,350,200,15);
    baseGround = new Ground (300,595,600,20);

    block1 = new Block (40,330,50,50);
    block2 = new Block (400,350,50,50);
    block3 = new Block (400,350,50,50);
    block4 = new Block (400,350,50,50);
    block5 = new Block (400,350,50,50);
    block6 = new Block (400,350,50,50);
    block7 = new Block (400,350,50,50);
    block8 = new Block (400,350,50,50);
    block9 = new Block (400,350,50,50);
    block10 = new Block (400,350,50,50);  
}

function draw(){
    background(58,47,46);
    Engine.update(engine);   

    ground.display();
    baseGround.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();

    drawSprites();
}