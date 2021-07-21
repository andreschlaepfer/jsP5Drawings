
const width = 1000;
const height = 1000;

var balls = [];
var idx = 0;

function setup() {
  createCanvas(width,height);
  
  
  
}

function draw() {
  background(51);
  for(var b = 0; b<balls.length; b++){
    
    balls[b].update();
    balls[b].show();
    
    
  }
  

}
function neoRandom(min, max){
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getSpeed(min, max){
  const speed = neoRandom(min, max);
  if (speed < 2 && speed > -2){
    getSpeed(min, max);

  }else{
    return speed;
  }

}

document.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    let x = neoRandom(150, 800);
    let y = neoRandom(150, 800);
    let radius = neoRandom(50, 200);
    balls[idx] = new Ball(x, y, radius);
    
    // if(checkCollision(balls,balls[idx]) === true){
    //   balls[idx].pop;
    //   idx--;
    // }else{
    //   idx++;
    // }

    idx++;
    console.log('Space pressed')
    console.log(`${idx}`);
  }
})

function checkCollision(list, ball){
  for(var p = 0; p < list.length; p++){
      if(Math.sqrt(
        ((list[p].x - ball.x)**2) +
        ((list[p].y - ball.y)**2)
        ) < 
        (list[p].radius + ball.radius)){
          return true;
        }
    
  }

}

function collide(ball1, ball2){
  let x_speed = ball1.xspeed
  ball1.xspeed = ball2.xspeed
  ball2.xspeed = x_speed

  let y_speed = ball1.yspeed
  ball1.yspeed = ball2.yspeed
  ball2.yspeed = y_speed

  // ball1.changeColor()
  // ball2.changeColor()
}

function Ball(x, y, radius) {
  
  this.x = x ;
  this.y = y;
  this.radius = radius;
  this.colorR = neoRandom(0, 255)
  this.colorG = neoRandom(0, 255)
  this.colorB = neoRandom(0, 255)

  this.xspeed = getSpeed(-10, 10);
  this.yspeed = getSpeed(-10, 10);

  this.update = function(){
    
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;

    if(this.x < this.radius || this.x > width - this.radius){
      this.xspeed = -this.xspeed;
      this.changeColor();
    }

    if(this.y < this. radius || this.y > height - this.radius){
      this.yspeed = -this.yspeed;
      this.changeColor();
    }

    for(var p = 0; p < balls.length; p++){
      for(var q = p; q < balls.length; q++){
        if(Math.sqrt(
          ((balls[p].x - balls[q].x)**2) +
          ((balls[p].y - balls[q].y)**2)
          ) < 
          (balls[p].radius + balls[q].radius)){
            collide(balls[p], balls[q]);
          }
      }
    }

  }

  this.show = function() {
    fill(this.colorR, this.colorG, this.colorB)
    ellipse(this.x, this.y, this.radius)


  }
  

  this.changeColor = function(){

    this.colorR = neoRandom(0, 255)
    this.colorG = neoRandom(0, 255)
    this.colorB = neoRandom(0, 255)
  }

  

}