'use strict';

function showSpecialPrice() {
  console.log('Введен секретный код. Все цены уменьшены вдвое!');
}

// Task #1

function fixAmount(amount) {
  if (typeof amount === 'number')
    return amount;
  let newAmount = [];
  amount = amount.trim();
  let amountSplit = amount.split('');
  amountSplit.forEach(function (val) {
    if (val === ',')
      val = '.';
    if (!isNaN(val) || val === '.') {
      newAmount.push(val);
    }
  });
  return +newAmount.join('');
}

//function fixAmount(amount) {
//  if (typeof amount === 'number')
//    return amount;
//  amount = amount.trim();
//  for (let i = 0; i < amount.length; i++) {
//    let str = amount.substr(0, i);
//    if (typeof str === 'number') {
//
//    }
//  }
//}

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

// Task #2

function handleKey(key) {
  key = key.toLowerCase();
  let code = 'r2d2';

}

var keys = ['2', '4', 'R', '2', 'd', '2'];
for (let key of keys) {
  handleKey(key);
}
















