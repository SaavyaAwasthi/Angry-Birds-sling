class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,90,90);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255
  }

  display(){
    if(this.body.speed < 3){

      super.display()
    }else{

      World.remove(world, this.body)
      this.visibility -= 5
      push()
      tint(255,this.visibility)
      image(this.image,this.body.position.x,this.body.position.y,90,90)
      pop()
    }


  }

};