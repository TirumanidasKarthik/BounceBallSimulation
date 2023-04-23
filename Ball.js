class Ball{
  constructor(x, y, d, velocity, bounciness){
    this.x = x;
    this.y = y;
    this.d = d;
    this.velocity = velocity;
    this.bounciness = bounciness;
  }
  
  show(){
    fill("black");
    circle(this.x, this.y, this.d);
  }
}