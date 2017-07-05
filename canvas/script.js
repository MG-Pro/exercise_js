window.onload = function () {
  var elem = document.getElementById('canvas');
  var context = elem.getContext('2d');
  if (!context) {
    alert('Скачай нормальный браузер');
    return;
  }
  // Цвет обводки
  context.strokeStyle = '#f00';
  // Цвет заливки
  context.fillStyle = '#ff0';
  // Толщина линий
  context.lineWidth = 4;
  // Рисуем голову. Рисование всегда начинается с beginPath
  context.beginPath();
  // Размечаем дугу с центром в точке (150, 150), радиусом 100px, начальным углом 0, конечным 360 градусов, рисование производится по часовой стрелке. Иными словами получаем окружность
  context.arc(150, 150, 100, 0, 2 * Math.PI, true);
  // Обводим
  context.stroke();
  // Завершаем рисование
  context.closePath();
  // Начинаем рисование
  context.beginPath();
  // Рисуем окружность (глаз)
  context.arc(110, 110, 15, 0, 2 * Math.PI, true);
  // Закрашиваем
  context.fill();
  // Заканчиваем рисование
  context.closePath();
  // Рисуем второй глаз
  context.beginPath();
  context.arc(190, 110, 15, 0, 2 * Math.PI, true);
  context.fill();
  context.closePath();
  // Рисуем нос
  context.beginPath();
  // Функция устанавливает точку из которой будет осуществляться рисование
  context.moveTo(150, 120);
  // Проводит линию из установленной точки, в указанную и так же устанавливает точку из которой будет осуществляться рисование
  context.lineTo(135, 180);
  context.lineTo(165, 180);
  context.stroke();
  context.closePath();
  // Рот
  context.beginPath();
  // Половинка окружности
  context.arc(150, 150, 70, Math.PI, 2 * Math.PI, true);
  context.stroke();
  context.closePath();
  // Волосы – другим цветом
  context.strokeStyle = '#000';
  context.beginPath();
  var x = 0;
  var y = 0;
  for (var i = 0; i < 5; i++) {
    context.moveTo(80 + x, 85 + y);
    // Кривая безье
    context.bezierCurveTo(60 + x, 60 + y, 120 + x, 40 + y, 100 + x, 0 + y);
    context.stroke();
    x += 15;
    y -= 5;
  }
  for (var i = 0; i < 5; i++) {
    context.moveTo(80 + x, 85 + y);
    context.bezierCurveTo(0 + x, 60 + y, 220 + x, 40 + y, 100 + x, 0 + y);
    context.stroke();
    x += 15;
    y += 5;
  }
  context.closePath();
  /* */
};

