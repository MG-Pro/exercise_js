function Ball(size, posX, posY, color) {
  var sizePx = size + 'px';
  this.posX = posX + 'px';
  this.posY = posY + 'px';
  var self = this;
  var posCount = 0;

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

    if(!this.angle) {
      angle = angle * Math.PI / 180;
      this.angle = angle;
    }
    var posXend = window.innerWidth - size;
    var posYend = window.innerHeight - size;


    var id = setInterval(function () {
      posX = (parseFloat (self.posX) + posCount * Math.cos(self.angle));
      posY = (parseFloat (self.posY) + posCount * Math.sin(self.angle));
      posCount++;
      
      if (posX >= posXend || posY >= posYend) {
        self.angle = self.angle + Math.PI / 8;
        posCount = 0;
        self.posX = posX - 1;
        self.posY = posY - 1;
      }
      if(posX < 0 || posY < 0) {
        self.angle = self.angle + Math.PI / 8;
        posCount = 0;
        self.posX = posX + 1;
        self.posY = posY + 1;
      }
      self.ball.style.left = posX + 'px';
      self.ball.style.top = posY + 'px';

    }, 5);

  }

}

var item = new Ball(20, 0, 0, 'green');
item.move(10);

var item2 = new Ball(30, 0, 0, 'red');
item2.move(20);

var item3 = new Ball(30, 0, 0, 'blue');
item3.move(50);

var item4 = new Ball(30, 0, 0, 'grey');
item4.move(80);

var item5 = new Ball(30, 0, 0, 'brown');
item5.move(45);