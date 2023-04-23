// var velocity = 0;
var gravity = 0.5;
// var bounciness = 0.8;
var balls = [];
var d = 16;

function setup() {
  createCanvas(400, 400);
  
  balls.push(new Ball(30, 30, d, 0, 0.8));
  balls.push(new Ball(200, 100, d, 0, 0.9));
  balls.push(new Ball(300, 200, d, 0, 0.6));
}

function draw() {
  background(220);
  for(let i = 0; i < balls.length; i++){
    balls[i].velocity += gravity;
    balls[i].y += balls[i].velocity;
    if(balls[i].y + d / 2 > height){
      balls[i].y = height - d/2;
      balls[i].velocity *= -balls[i].bounciness;
    }
    balls[i].show();
  }
}