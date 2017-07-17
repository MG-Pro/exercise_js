function Ball(size, posX, posY, color) {
  var sizePx = size + 'px';
  posX = posX + 'px';
  posY = posY + 'px';
  var self = this;
  
  this.ball = document.createElement('div');
  this.ball.classList.add('ball');
  this.ball.style.width = sizePx;
  this.ball.style.height = sizePx;
  this.ball.style.left = posX;
  this.ball.style.top = posY;
  document.body.appendChild(this.ball);
  this.move = function (angle) {
    var posXend = screen.width - size;
    var posYend = screen.height - size;
    for(var i = 0; i < posXend; i++) {
      self.ball.style.left = posX;
      self.ball.style.top = posY;
  
    }
  }

}

var item = new Ball(20, 0, 0);
item.move(45);