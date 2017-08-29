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


