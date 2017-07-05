var radius = 200;
var elem = document.getElementById("watch");
var ctx = elem.getContext('2d');
var width = elem.width;
var height = elem.height;

function clockHands(pos, heightHand, widthHand, color) { // pos - hour/ minute /sec
  ctx.beginPath();
  ctx.moveTo(width / 2, height / 2);
  var a = pos * 360 / 60 - 90;
  var angle = a * Math.PI / 180;
  var x = width / 2 + radius * Math.cos(angle) * heightHand;
  var y = height / 2 + radius * Math.sin(angle) * heightHand;
  ctx.lineTo(x, y);
  ctx.strokeStyle = color;
  ctx.lineWidth = widthHand;
  ctx.stroke();
  ctx.closePath();
}

function clock() {
  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = '#663399';
  ctx.fillStyle = '#663399'
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.arc(250, 250, 200, 0, 2 * Math.PI, true);
  ctx.stroke();
  ctx.closePath();
  for (var i = 0; i <= 12; i++) {
    ctx.beginPath();
    var angle = i * 2 * Math.PI / 12;
    var x = width / 2 + radius * Math.cos(angle) * 0.9;
    var y = height / 2 + radius * Math.sin(angle) * 0.9;
    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }
  var date = new Date();
  var hours = date.getHours();
  hours = hours > 12 ? hours - 12 : hours;
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var hour = (hours + minutes / 60) * 5;
  var minute = minutes + seconds / 60;
  clockHands(hour, 0.7, 10, "black");
  clockHands(minute, 0.8, 7, "red");
  clockHands(seconds, 0.9, 5, "green");
}
setInterval(clock, 1000);





