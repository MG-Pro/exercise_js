'use strict';
var positions = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    price: 10000,
    discount: 7,
    available: 3
  },
  {
    title: 'Ховерборд Mattel 2016',
    price: 9200,
    discount: 4,
    available: 14
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    price: 57000,
    discount: 0,
    available: 1
  }
];

// Task #1

const itemPrototype = {
  hold(amount = 1) {
    if (this.available < amount) {
      return false;
    }
    this.available -= amount;
    this.holded += amount;
    return true;
  },
  toString() {
    return `${this.title} (остаток ${this.available}, в резерве ${this.holded})`;
  }
};

function createItem(title, amount) {
  const item = Object.create(itemPrototype);
  item.title = title;
  item.available = amount;
  item.holded = 0;
  return item;
}

const items = [];
for (let item of positions) {
  items.push(createItem(item.title, item.available));
}

items[0].hold(2);
items[1].hold(8);
items[1].hold(12);
items[2].hold(1);

for (let item of items) {
  console.log(`Товар ${item}`);
}

//##############

itemPrototype.unHold = function (amount) {
  if (!amount) {
    amount = this.holded;
  }
  if (this.holded < amount) {
    return false;
  }
  this.holded -= amount;
  this.available += amount;
  return true;
};

items[0].unHold(2);
items[2].unHold(1);
items[1].unHold(13);
items[1].unHold(3);

for (let item of items) {
  console.log(`Товар ${item}`);
}

// Task #2

for (let item of positions) {
  Object.defineProperty(item, "finalPrice", {
    get: function() {
      return this.price - this.price * this.discount / 100;
    },
    set: function (newFinalPrice) {
      if(newFinalPrice > this.price) {
        console.log(`Новая цена больше чем базовая цена`)
        return;
      }
      this.discount = Math.round((100 - newFinalPrice * 100 / this.price) * 100)  / 100;
    }

  });
}

for (let item of positions) {
  console.log(` ${item.discount}`);
}

positions[2].finalPrice = 58000;

for (let item of positions) {
  console.log(` ${item.discount}`);
}

// Task #3

function isValidPosition(item, options) {
  if(Object.keys(item).toString() === options.toString())
    return true;
  else
    return false;
}

const requiredFields = [ 'title', 'price', 'discount', 'available' ];
let form1 = {
  title: 'Товар Телепорт бытовой VZHIH-101',
  price: 7800,
  discount: 0
};
let form2 = {
  title: 'Товар Телепорт бытовой VZHIH-101',
  discount: 10
};
let form3 = {
  title: 'Товар Телепорт бытовой VZHIH-101',
  discount: 10,
  available: 0
};

if ( isValidPosition(form3, requiredFields) ) {
  console.log('Форма №1 заполнена верно');
} else {
  console.log('В форме №1 не заполнены необходимые поля');
}




