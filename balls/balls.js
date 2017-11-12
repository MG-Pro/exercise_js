'use strict';

function Ball(color, size = 50, posX = 0, posY = 0) {
  this.posX = posX;
  this.posY = posY;
  this.size = size;
  this.color = color;

  this.ball = document.createElement('div');
  this.ball.classList.add('ball');
  this.ball.style.width = this.size + 'px';
  this.ball.style.height = this.size + 'px';
  this.ball.style.left = this.posX + 'px';
  this.ball.style.top = this.posY + 'px';
  this.ball.style.backgroundColor = this.color;
  let self = this;

  document.body.appendChild(this.ball);

  this.move = function (speed = 2, angle = 10) {

    let posXEnd = window.innerWidth - this.size;
    let posYEnd = window.innerHeight - this.size;
    let dx = speed;
    let dy = speed;
    angle = angle * Math.PI / 180;

    let id = setInterval(function () {
      if (self.posX > posXEnd || self.posX < 0) {
        dx = -dx;
      }
      if (self.posY > posYEnd || self.posY < 0) {
        dy = -dy;
      }

      self.posX += dx * Math.cos(angle);
      self.posY += dy * Math.sin(angle);
      console.log(`${self.color} x: ${self.posX}; y: ${self.posY}`);
      self.ball.style.left = self.posX + 'px';
      self.ball.style.top = self.posY + 'px';
    }, 10);
  }
}
function startBall(color, speed, angle) {
  let item = new Ball(color);
  item.move(speed, angle);
}

startBall('red', 2, 40);
startBall('green', 3, 10);
startBall('fuchsia', 4, 30);
startBall('black', 5, 20);
startBall('blue', 6, 70);
startBall('blue', 6, 50);
startBall('blue', 6, 60);
startBall('blue', 6, 55);
startBall('blue', 6, 57);
startBall('blue', 6, 49);
startBall('blue', 6, 65);
startBall('blue', 6, 75);
startBall('blue', 6, 76);
startBall('blue', 6, 79);
startBall('blue', 6, 29);
startBall('blue', 6, 25);
startBall('blue', 6, 37);
startBall('blue', 6, 15);
startBall('blue', 6, 12);

