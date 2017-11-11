'use strict';

function Ball(color, size = 50, posX = 0, posY = 0) {
  let sizePx = size + 'px';
  this.posX = posX + 'px';
  this.posY = posY + 'px';
  this.size = size;
  let self = this;
  let posCount = 0;
  let revers = 1;
  let revers2 = 1;

  this.ball = document.createElement('div');
  this.ball.classList.add('ball');
  this.ball.style.width = sizePx;
  this.ball.style.height = sizePx;
  this.ball.style.left = posX;
  this.ball.style.top = posY;
  this.ball.style.backgroundColor = color;

  this.angle;

  document.body.appendChild(this.ball);
  this.move = function (angle) {

    if (!this.angle) {
      angle = angle * Math.PI / 180;
      this.angle = angle;
    }
    let posXend = window.innerWidth - this.size;
    let posYend = window.innerHeight - this.size;


    let id = setInterval(function () {
      posX = (parseFloat(self.posX) + posCount * Math.cos(self.angle));
      posY = (parseFloat(self.posY) + posCount * Math.sin(self.angle));
      posCount++;

      if (posX >= posXend || posY >= posYend) {

        self.angle = Math.PI * revers - self.angle;
        let a = self.angle * 180 / Math.PI;
        console.log(a, revers2);
        posCount = 0;
        self.posX = posX - 1;
        self.posY = posY - 1;
        if(revers === 1)
          revers = 2;
        else
          revers = 1;
      }
      if (posX < 0 || posY < 0) {

        self.angle = Math.PI * revers2 - self.angle;
        let a = self.angle * 180 / Math.PI;
        console.log(a, revers2);
        posCount = 0;
        self.posX = posX + 1;
        self.posY = posY + 1;
        if(revers2 === 1)
          revers2 = 2;
        else
          revers2 = 1;
      }

      self.ball.style.left = posX + 'px';
      self.ball.style.top = posY + 'px';

    }, 5);

  }

}

let item = new Ball('red');
item.move(10);

//let item2 = new Ball(30, 0, 0, 'red');
//item2.move(20);
//
//let item3 = new Ball(30, 0, 0, 'blue');
//item3.move(50);
//
//let item4 = new Ball(30, 0, 0, 'grey');
//item4.move(80);
//
//let item5 = new Ball(30, 0, 0, 'brown');
//item5.move(45);