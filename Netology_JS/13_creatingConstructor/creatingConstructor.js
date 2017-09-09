'use strict';

function rand(min, max) {
  return Math.ceil((max - min + 1) * Math.random()) + min - 1;
}

function generateId() {
  return Array(4).fill(1).map(value => rand(1000, 9999)).join('-');
}

const pointsInfo = [
  {title: 'Темная сторона Луны', coords: [500, 200, 97]},
  {title: 'Седьмое кольцо Юпитера', coords: [934, -491, 712]},
  {title: 'Саратов', coords: [30, 91, 77]}
];

// Task #1

class OrdersTeleportationPoint {
  constructor(title, x, y, z) {
    this.title = title;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  getDistance(x, y, z) {
    return Math.sqrt(Math.pow((x - this.x), 2) + Math.pow((y - this.y), 2) + Math.pow((z - this.z), 2));
  }

}

const point = new OrdersTeleportationPoint('Темная сторона Луны', 500, 200, 97);
let distance = point.getDistance(100, -100, 33);
console.log(`Расстояние до пункта «${point.title}» составит ${distance.toFixed(0)} единиц`);

// Task #2

class OrdersTeleportationPointLocator {
  constructor(list) {
    if (!(list instanceof Array))
      throw new Error('Это не массив');
    this.points = list.filter(function (val) {
      if (val instanceof OrdersTeleportationPoint) {
        return val;
      }
    });
  }
}

OrdersTeleportationPointLocator.prototype.getClosest = function (x, y, z) {
  let minDistance = Infinity;
  let minDistancePoint;
  for (let val of this.points) {
    val.distance = val.getDistance(x, y, z);
    if (val.distance < minDistance) {
      minDistance = val.distance;
      minDistancePoint = val;
    }
  }
  return minDistancePoint;
};

const points = pointsInfo.map(point => new OrdersTeleportationPoint(point.title, ...point.coords));
const locator = new OrdersTeleportationPointLocator(points);

const closestPoint = locator.getClosest(333, 294, 77);
console.log(`Ближайший пункт телепортации заказов «${closestPoint.title}»`);

// Task #3

class LoyaltyCard {
  constructor(name, sum) {
    if (!this.id) {
      Object.defineProperty(this, 'id', {
        get: generateId
      });
    }

    this.owner = name;
    this.orders = [];
    this.orders.push(sum);

    Object.defineProperty(this, 'balance', {
      value: sum,
      writable: false,
      configurable: true
    });
  }

  get discount() {
    if (this.balance < 3000)
      return 0;
    else if (this.balance < 5000)
      return 3;
    else if (this.balance < 10000)
      return 5;
    else
      return 7;
  }

  getFinalSum(newOrderSum) {
    return newOrderSum - newOrderSum * this.discount / 100;
  }

  append(newOrderSum) {
    Object.defineProperties(this, {
      'balance': {
        value: this.balance + newOrderSum
      }
    });
    this.orders.push(newOrderSum);
  }

  show() {
    console.log(`Карта ${this.id}:
    \tВладелец: ${this.owner}
    \tБаланс: ${this.balance}Q
    \tТекущая скидка: ${this.discount}%
    \tЗаказы:\n`);
    this.orders.forEach(function (val, i) {
      console.log(`\t\t\t#${i} на сумму ${val}Q`);
    });
  }
}

const card = new LoyaltyCard('Иванов Иван', 6300);

let newOrderSum = 7000;
let finalSum = card.getFinalSum(newOrderSum);
console.log(`Итоговая сумма для заказа на ${newOrderSum}Q по карте
  составит ${finalSum}Q. Скидка ${card.discount}%.`);

card.append(newOrderSum);
console.log(`Баланс карты после покупки ${card.balance}. Скидка ${card.discount}%.`);
card.show();












