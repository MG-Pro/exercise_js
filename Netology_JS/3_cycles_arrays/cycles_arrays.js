'use strict';

var positions = [
  'Отвертка ультрозвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)',
  'Машина времени DeLorean',
  'Репликатор домашний STAR-94',
  'Лингвенсор 000-17',
  'Целеуказатель электронный WAY-Y'
];

// Task #1

let myLength = positions.length;

console.log('\nСписок наименований');
for (let i = 0; i < myLength; i++) {
  console.log(`${i + 1}: ${positions[i]}`);
}

// Task #2

positions.push('Экзоскелет Trooper-111', 'Нейроинтерфейс игровой SEGUN', 'Семена дерева Эйва');
console.log('\nОкончательный список наименований');

for (let i = 0; i < positions.length; i++) {
  console.log(`${i + 1}: ${positions[i]}`);
}
// Task #3

let indexTarget = positions.indexOf('Машина времени DeLorean');
let targetItems = positions.splice(indexTarget, 1);
positions.unshift(targetItems[0]);

console.log('\nПринять в первую очередь:');
for (let i = 0; i < 3; i++) {
  console.log(`${i + 1}: ${positions[i]}`);
}

// Task #4

let [item1, item2, item3, item4, item5, ...restItem] = positions;

console.log('\nВ магазине');
console.log(item1);
console.log(item2);
console.log(item3);
console.log(item4);
console.log(item5);

console.log('\nОстальные товары');
for (let val of restItem) {
  console.log(val);
}


















