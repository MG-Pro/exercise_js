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
      posX = (parseInt(self.posX) + posCount * Math.cos(self.angle));
      posY = (parseInt(self.posY) + posCount * Math.sin(self.angle));
      posCount++;
      this;
      if (posX >= posXend || posY >= posYend) {
        self.angle = self.angle + Math.PI / 2;
        posCount = 0;
        self.posX = posX - 1;
        self.posY = posY - 1;
        posXend = 0;
        posYend = 0;
      }
      self.ball.style.left = posX + 'px';
      self.ball.style.top = posY + 'px';

    }, 5);

  }

}

var item = new Ball(20, 0, 0);
item.move(20);