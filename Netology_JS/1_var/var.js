'use strict';

// #1
var itemName;
var itemPrice;

// #2
itemName = 'Телепорт бытовой VZHIH-101';
itemPrice = 10000;

console.log(`В наличии имеется: "${itemName}"`);
console.log(`Стоимость товара ${itemPrice} Q`);

// #3
var discount = 10;
var itemCount = 2
var discountSum = (itemPrice * itemCount) * (discount / 100);

console.log(`Цена покупки составит ${itemPrice * itemCount - discountSum} Q`);

// #4
var purchasePrice = 6500;
var balanceVal = 52334224;

var residue = balanceVal % purchasePrice;
var purchaseItemMax = (balanceVal - residue) / purchasePrice;

console.log(`Мы можем закупить ${purchaseItemMax} единиц товара, после закупки на счету останется ${residue} Q`);