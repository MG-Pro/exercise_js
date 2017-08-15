'use strict';

function showSpecialPrice() {
  console.log('Введен секретный код. Все цены уменьшены вдвое!');
}

// Task #1

function fixAmount(amount) {
  if (typeof amount === 'number')
    return amount;
  let newAmount = [];
  amount = amount.trim().replace(',', '.');
  let amountSplit = amount.split('');
  for (let i = 0; i < amountSplit.length; i++) {
    if (!isNaN(amountSplit[i]) || amountSplit[i] === '.') {
      newAmount.push(amountSplit[i]);
    }
    else {
      break;
    }
  }
  return newAmount.length > 0 ? +newAmount.join('') : -1;
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

// Task #2
let chars = '';

function handleKey(char) {
  let code = 'r2d2';
  char = char.toLowerCase();
  chars = chars.concat(char);
  if(chars.lastIndexOf(code) !== -1) {
    showSpecialPrice();
  }
}

var keys = ['2', '4', 'R', '2', 'd', '2'];
for (let key of keys) {
  handleKey(key);
}

// Task #3

function parseData(cols, rows, sep = ',') {
  let items = [];
  for (let key in rows) {
    let row = rows[key].split(sep);
    let item = {};
    for (let i = 0; i < cols.length; i++) {
      item[cols[i]] = row[i];
    }
    items[key] = item;
  }
  return items;
}

const data = [
  '12,Телепорт бытовой VZHIH-101 ,17,10000',
  '77, Меч световой FORCE (синий луч), 2,57000'
];

let items = parseData(['id', 'name', 'amount', 'price'], data);
console.log(items);













