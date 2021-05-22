const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

var gameState = "on_sling"

var score = 0

bird_arr = []
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    flying = loadSound("sounds_bird_flying.mp3")
    select = loadSound("sounds_bird_select.mp3")
    snort = loadSound("sounds_pig_snort.mp3")
    //getBackgroundImage();
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
    bird2 = new Bird(75, 170)
    bird3 = new Bird(50, 170)

    bird_arr.push(bird3)
    bird_arr.push(bird2)
    bird_arr.push(bird)

    wall1 = new Ground(10,100,10,200)

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){



    if(backgroundImg){
        background(backgroundImg);
        noStroke()
        textSize(35)
        fill("yellow")
        text("Score : " + score, windowWidth - 300, 50)
    }

    
    Engine.update(engine);
    strokeWeight(1);
    box1.display();
    box2.display();
    pig1.display();

    pig1.score();

    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score()
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    ground.display();
    //log6.display();
    slingshot.display();    
    bird2.display()
    bird3.display()
    wall1.display()
}


function mouseDragged(){

    if(gameState === 'on_sling'){
    Matter.Body.setPosition(bird_arr[bird_arr.length - 1].body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    if (gameState === "on_sling"){
        slingshot.fly();
        gameState = "no_sling"
        flying.play()
    }

}

function keyPressed(){

    if(keyCode === 32){

        if(bird_arr.length > 0){
            bird_arr[bird_arr.length - 1].trajectory = []
            bird_arr.pop()

            select.play()

            Matter.Body.setPosition(bird_arr[bird_arr.length - 1].body, {x:100, y: 50});
            slingshot.attach(bird_arr[bird_arr.length - 1])

            gameState = "on_sling"
       }

        
    }
}

async function getBackgroundImage(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo")

    var responseJSON = await response.json();

    var datetime = responseJSON.datetime
    var hour = datetime.slice(11,13)

    console.log(datetime)
    console.log(hour)


    if(hour >= 06 && hour <= 19){

        bg = "sprites/bg.png"
    }
    else{

        bg = "sprites/bg2.jpg"
    }
     backgroundImg = loadImage(bg)
    //var hour = datetime.slice(11,13)

}