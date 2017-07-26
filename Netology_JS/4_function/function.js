'use strict';

// Task #1

function getWarrantyCost(term) {
  if (term === 1)
    return 1250;
  else if (term === 2)
    return 2300;
  else
    return 0;
}

console.log(`Дополнительное гарантийное обслуживание: ${getWarrantyCost(3)} Q`);

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
  if (!delivery) return 0;
  switch (place) {
    case 'Луна':
      return 150;
    case 'Крабовидная туманность':
      return 250;
    case 'Галактика Туманность Андромеды':
      return 550;
    case 'Туманность Ориона':
      return 600;
    case 'Звезда смерти':
      return 'договорная цена';
    default:
      return NaN;
  }
}

var result = getDeliveryCost(true, 'Туманность');

if (result) {
  console.log(`Стоимость доставки: ${result} Q`);
} else if (result === 0) {
  console.log(`Доставка не требуется`);
} else {
  console.log(`Ошибка при расчете стоимости доставки`);
}

// Task #4

function getOrderCost(term, str, delivery, place) {
  let warrantyCost;
  let engravingCost;
  let deliveryCost;

  let wordPrice = 11;
  let wordsCount = str.split(' ').length;

  if (term === 1)
    warrantyCost = 1250;
  else if (term === 2)
    warrantyCost = 2300;
  else
    warrantyCost = 0;

  if (!str) engravingCost = 0;
  engravingCost = wordPrice * wordsCount;

  function getDeliveryCost(delivery, place) {
    if (!delivery) {
      return 0;
    } else {
      switch (place) {
        case 'Луна':
          return 150;
        case 'Крабовидная туманность':
          return 250;
        case 'Галактика Туманность Андромеды':
          return 550;
        case 'Туманность Ориона':
          return 600;
        default:
          return 0;
      }
    }
  }

  deliveryCost = getDeliveryCost(delivery, place);

  let orderCost = warrantyCost + engravingCost + deliveryCost;
  return [orderCost, term, warrantyCost, engravingCost, deliveryCost, place];
}

var orderResult = getOrderCost(3, string, true, 'Звезда');

console.log(`Общая стоимость заказа: ${orderResult[0]} Q.`);
console.log(`Из них ${orderResult[2]} Q за гарантийное обслуживание на ${orderResult[1]} год/года.`);
console.log(`Гравировка на сумму ${orderResult[3]} Q.`);
console.log(`Доставка в область ${orderResult[5]}: ${orderResult[4]} Q.`);









