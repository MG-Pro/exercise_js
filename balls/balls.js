'use strict';
const balls = [];
const plane = document.querySelector('.plane');
const stop = document.querySelector('.stop');
const add = document.querySelector('.add');
const clear = document.querySelector('.clear');
const infoCont = document.querySelector('.info');
const counter = document.querySelector('.counter');

class Ball {
  constructor(color, size = 50, posX = 0, posY = 0) {
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
    this.ball.id = 'b' + (Math.floor(Math.random() * (1000 - 100)) + 100);
    this.ball.addEventListener('click', e => {
      this.remove(e);
    });
    plane.appendChild(this.ball);
  }

  remove(e) {
    plane.removeChild(e.target);
    counter.textContent--;
    clearInterval(this.id);
    infoCont.removeChild(infoCont.querySelector('#' + this.ball.id));
  }

  move(speed = 2, angle = 10) {
    let posXEnd = window.innerWidth - this.size - 5;
    let posYEnd = window.innerHeight - this.size - 5;
    let dx = speed;
    let dy = speed;
    angle = angle * Math.PI / 180;
    this.id = setInterval(animate, 15, this);

    function animate(self) {
      if (self.posX > posXEnd || self.posX < 0) {
        dx = -dx;
      }
      if (self.posY > posYEnd || self.posY < 0) {
        dy = -dy;
      }
      self.posX += dx * Math.cos(angle);
      self.posY += dy * Math.sin(angle);
      self.ball.style.left = self.posX + 'px';
      self.ball.style.top = self.posY + 'px';

      if (!infoCont.querySelector('#' + self.ball.id)) {
        const info = document.createElement('p');
        info.classList.add('info-item');
        info.id = self.ball.id;
        info.style.color = self.ball.style.backgroundColor;
        infoCont.appendChild(info);
      }
      infoCont.querySelector(`#${self.ball.id}`)
        .textContent = `ID: ${self.ball.id}; color: ${self.color}; x: ${Math.round(self.posX)}; y: ${Math.round(self.posY)}`;
    }
  }

  stop() {
    clearInterval(this.id);
  }
}

add.addEventListener('click', () => {
  const options = new randBallOptions();
  let item = new Ball(options.color, options.size);
  balls.push(item);
  item.move(options.speed, options.angle);
  counter.textContent++;
});

stop.addEventListener('click', () => {
  stopAll(balls)
});

clear.addEventListener('click', () => {
  stopAll(balls, true)
});

function stopAll(list, clear) {
  list.forEach(item => {
    item.stop();
    if (clear) {
      plane.removeChild(item.ball);
      infoCont.removeChild(infoCont.querySelector('.info-item'));
      counter.textContent--;
    }
  });
}

function randBallOptions() {
  let colors = ['red', 'green', 'blue', 'black', 'fuchsia', 'purple', 'grey', 'firebrick', 'yellow', 'skyblue', 'khaki', 'brown', 'aqua', 'coral'];
  this.color = colors[Math.floor(Math.random() * colors.length)];
  this.speed = Math.floor(Math.random() * (5 - 1)) + 1;
  this.angle = Math.floor(Math.random() * (85 - 5)) + 5;
  this.size = Math.floor(Math.random() * (100 - 20)) + 20;
}




