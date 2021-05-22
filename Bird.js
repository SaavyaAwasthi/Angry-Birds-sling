class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,70,70);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png")
    this.visibility = 255
    this.trajectory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 240){
      var position = [this.body.position.x,this.body.position.y]

      this.trajectory.push(position);
    }

    //console.log(this.trajectory.length)

    for(var i = 0; i < this.trajectory.length; i++){
      //console.log(i)
      /*push()
      this.visibilty = this.visibilty - 0.5
      tint(255, this.visibility)*/
      image(this.smoke,this.trajectory[i][0],this.trajectory[i][1])
    }

    
  }
}
