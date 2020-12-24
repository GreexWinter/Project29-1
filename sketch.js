const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var box1G1L1, box2G1L1, box3G1L1, box4G1L1, box5G1L1, box6G1L1, box7G1L1;
var box1G1L2, box2G1L2, box3G1L2, box4G1L2, box5G1L2, box6G1L2, box7G1L2;
var polygon1;
var slingshot;

function preload(){

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    // Ground-1, Level-1
    box1G1L1 = new Box(375,265,40,60);
    box2G1L1 = new Box(415,265,40,60);
    box3G1L1 = new Box(455,265,40,60);
    box4G1L1 = new Box(495,265,40,60);
    box5G1L1 = new Box(535,265,40,60);
    box6G1L1 = new Box(575,265,40,60);
    box7G1L1 = new Box(615,265,40,60);

    // Ground-1, Level-2
    box1G1L2 = new Box(415,205,40,60);
    box2G1L2 = new Box(455,205,40,60);
    box3G1L2 = new Box(495,205,40,60);
    box4G1L2 = new Box(535,205,40,60);
    box5G1L2 = new Box(575,205,40,60);

    // Ground-1, Level-3
    box1G1L3 = new Box(455,145,40,60);
    box2G1L3 = new Box(495,145,40,60);
    box3G1L3 = new Box(535,145,40,60);

    box1G1L4 = new Box(495,85,40,60);

    ground1 = new Ground(495,300,300,10);
    ground2 = new Ground(900,225,300,10);

    polygon1 = new Polygon();

    slingshot = new Slingshot(polygon1.body, {x: 70, y: 140})
}

function draw(){
    background(0);

    Engine.update(engine);  

    box1G1L1.display();
    box2G1L1.display();
    box3G1L1.display();
    box4G1L1.display();
    box5G1L1.display();
    box6G1L1.display();
    box7G1L1.display();

    box1G1L2.display();
    box2G1L2.display();
    box3G1L2.display();
    box4G1L2.display();
    box5G1L2.display();

    box1G1L3.display();
    box2G1L3.display();
    box3G1L3.display();

    box1G1L4.display();

    ground1.display();
    ground2.display();

    polygon1.display();

    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}