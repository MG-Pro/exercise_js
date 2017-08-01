'use strict';

var positions = [
  'Телепорт бытовой VZHIH-101',
  'Отвертка ультрозвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)'
];

var prices = [
  10000,
  4800,
  9200,
  2500,
  57000
];

var hitName = positions[2], hitPrice = prices[2];

// Task #1

let hit = {};

hit.name = hitName;
hit.price = hitPrice;

console.log(`Хит продаж мартобря: <${hit.name}> цена ${hit.price} Q`)

// Task #2

let items = [];

for (let i = 0; i < positions.length; i++) {
  let item = {
    name: positions[i],
    price: prices[i]
  };
  items.push(item);
}

console.log(`Купите ${items[4].name} по цене ${items[4].price} Q`);

// Task #3

function showDiscount(good, count) {
  let discount;
  if (count < 10)
    discount = 5;
  else if (count >= 10 && count < 50)
    discount = 7;
  else if (count >= 50 && count < 100)
    discount = 10;
  else
    discount = 15;

  let cost = good.price * count;
  let resultCost = cost * discount / 100;
  let profit = cost - resultCost;

  console.log(`${good.name} — стоимость партии из ${count} штук ${resultCost} Q (скидка ${discount}%), ваша выгода ${profit} Q!`)
}

showDiscount(items[0], 12);
showDiscount(items[3], 97);
showDiscount(items[4], 150);

// Task #4

items[3].amount = 4;

function updateAmount(item, rate) {
  if(!rate)
    rate = 1;
  if(item.amount === undefined)
    return;

  if(item.amount === 0 || item.amount < rate) {
    console.log(`${item.name} закончился на складе`);
  }
  else if (item.amount === 0 || item.amount > rate) {
    item.amount -= rate;
    console.log(`${item.name} — остаток ${item.amount} шт`);
  } else  if (item.amount === rate) {
    item.amount -= rate;
    console.log(`Это был последний ${item.name}, вам повезло!`);
  }
}

updateAmount(items[1], 17);
updateAmount(items[3], 3);
updateAmount(items[3]);
updateAmount(items[3], 5);







