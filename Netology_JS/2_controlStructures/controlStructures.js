// Task #1
'use strict';

var stockCount = 656;
var orderCount = 700;

if (orderCount > stockCount) {
  console.log('На складе нет такого количества товаров');
} else if (orderCount == stockCount) {
  console.log('Вы забираете весь товар c нашего склада!');
} else {
  console.log('Заказ оформлен');
}

// Task #2
var place = 'Звезда смерти';
var price;

switch (place) {
  case 'Луна':
    price = 150;
    break;
  case 'Крабовидная туманность':
    price = 250;
    break;
  case 'Галактика Туманность Андромеды':
    price = 550;
    break;
  case 'Туманность Ориона':
    price = 600;
    break;
  case 'Звезда смерти':
    price = 'договорная цена';
    break;
  default:
    price = 'В ваш квадрант доставка не осуществляется';
}

console.log(`Стоимость доставки для области ${place}: ${price} Q`);

// Task #3

var itemPrice = 'oo';

try {
  if (typeof +itemPrice != 'number')
    throw `Вы допустили ошибку: ${itemPrice} не является числом`
  else
    throw 'Цена товара введена корректно';
} catch (msg) {
  console.log(msg);
}

// Task #4

var age = 15;
var residence = 'Земля';
var msg;

if (residence == 'Земля' && age < 18)
  msg = 'Вы не достигли совершеннолетия';
else if (residence == 'Земля' && age >= 18)
  msg = 'Приятных покупок';
else if (residence == 'Юпитер' && age < 120)
  msg = 'Сожалеем. Вернитесь на 120-й день рождения!';
else if (residence == 'Юпитер' && age >= 120)
  msg = 'Чистого неба и удачных покупок!';
else
  msg = 'Спасибо, что пользуетесь услугами нашего магазина!';
console.log(msg);











