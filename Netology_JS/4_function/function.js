'use strict';

// Task #1

function getWarrantyCost(term) {
  var msg = '';
  if (!term || term <= 0)
    return 0;
  if (term > 2) {
    term = 2;
    msg = '(максимальный срок гарантии 2 года) '
  }
  if (term <= 2 && term > 1)
    return msg + 2300;
  else
    return 1250;
}

console.log(`Дополнительное гарантийное обслуживание: ${getWarrantyCost()} Q`);

// Task #2

var string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, veniam';

function getEngravingCost(str) {
  if (!str) return 0;
  let wordPrice = 11;
  let wordsCount = str.split(' ').length;
  return wordPrice * wordsCount;
}

console.log(`Подарочная упаковка и гравировка: ${getEngravingCost(string)} Q`)

// Task #3

function getDeliveryCost(delivery, place) {
  let price;
  if (!delivery) return 0;
  switch (place) {
    case 'Луна':
      return 150;
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
      price = NaN;
  }
  return price;
}

var result = getDeliveryCost(false, 'Луна');

if (result) {
  console.log(`Стоимость доставки: ${result} Q`);
} else if (result === 0) {
  console.log(`Доставка не требуется`);
} else if (!result) {
  console.log(`Ошибка при расчете стоимости доставки`);
}

// Task #4

function getOrderCost(term, str, delivery, place) {
  let warrantyCost;
  let engravingCost;
  let deliveryCost;

  let msg = '';
  let wordPrice = 11;
  let wordsCount = str.split(' ').length;

  if (term > 2) {
    term = 2;
    msg += '(максимальный срок гарантии 2 года) '
  }

  if (!term || term <= 0) warrantyCost = 0;
  if (term <= 2 && term > 1)
    warrantyCost = 2300;
  else
    warrantyCost = 1250;

  if (!delivery) {
    deliveryCost = 0;
  } else {
    switch (place) {
      case 'Луна':
        deliveryCost = 150;
        break;
      case 'Крабовидная туманность':
        deliveryCost = 250;
        break;
      case 'Галактика Туманность Андромеды':
        deliveryCost = 550;
        break;
      case 'Туманность Ориона':
        deliveryCost = 600;
        break;
      case 'Звезда смерти':
        deliveryCost = 0;
        msg += '\nДоговорная цена доставки';
        break;
      default:
        deliveryCost = 0;
        msg += '\nCтоимость доставки не определена';
    }
  }

  if (!str) engravingCost = 0;
  engravingCost = wordPrice * wordsCount;

  let orderCost = warrantyCost + engravingCost + deliveryCost;
  return [orderCost, term, warrantyCost, engravingCost, deliveryCost, place, msg];
}

var orderResult = getOrderCost(3, string, true, 'Звезда');

console.log(`Общая стоимость заказа: ${orderResult[0]} Q.`);
console.log(`Из них ${orderResult[2]} Q за гарантийное обслуживание на ${orderResult[1]} год/года.`);
console.log(`Гравировка на сумму ${orderResult[3]} Q.`);
console.log(`Доставка в область ${orderResult[5]}: ${orderResult[4]} Q.`);
console.log(orderResult[6]);









