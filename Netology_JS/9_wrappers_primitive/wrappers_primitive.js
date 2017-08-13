'use strict';

function showSpecialPrice() {
  console.log('Введен секретный код. Все цены уменьшены вдвое!');
}

// Task #1

function fixAmount(amount) {
  if (typeof amount === 'number')
    return amount;
  let newAmount = [];
  let amountSplit = amount.split('');
  amountSplit.forEach(function (val) {
    if (!isNaN(val) || val === '.' || val === ',') {
      newAmount.push(val);
    }
  });
  return +newAmount.join('');
}

const orders = [
  {price: 21, amount: 4},
  {price: 50, amount: '17 штук'},
  {price: 7, amount: '1,5 килограмма'},
  {price: 2, amount: ' 2.7 метра '},
  {price: 1, amount: 'семь единиц'}
];

for (let order of orders) {
  let result = fixAmount(order.amount);
  console.log(`Заказ на сумму: ${result * order.price} Q`);
}