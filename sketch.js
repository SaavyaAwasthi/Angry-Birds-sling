const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(windowWidth/2,height,windowWidth,20);
    platform = new Ground(150, windowHeight-203, 300, 600);

    box1 = new Box(850,windowHeight-30,90,90);
    box2 = new Box(1070,windowHeight-30,90,90);
    pig1 = new Pig(960, windowHeight-50);
    log1 = new Log(960,windowHeight-100,320, PI/2);

    box3 = new Box(850,windowHeight-110,90,90);
    box4 = new Box(1070,windowHeight-110,90,90);
    pig3 = new Pig(960, windowHeight-130);

    log3 =  new Log(960,180,300, PI/2);

    box5 = new Box(960,160,90,90);
    log4 = new Log(910,120,150, PI/7);
    log5 = new Log(1020,120,150, -PI/7);

    console.log(windowHeight,windowWidth)

    bird = new Bird(100,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(1);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    ground.display();
    //log6.display();
    slingshot.display();    


    console.log(pig1.body.speed +","+  pig3.body.speed)
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){

    if(keyCode === 32){

        Matter.Body.setPosition(bird.body, {x:100, y: 50});
        slingshot.attach(bird.body)
    }
}