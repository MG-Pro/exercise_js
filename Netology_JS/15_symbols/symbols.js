'use strict';

// Task #1

class BarcodeGenerator {
  constructor(size = 1) {
    this.size = size;
    BarcodeGenerator.prefix = Symbol('prefix')
  }

  create() {
    let code = [];
    for (let i = 0; i < this.size; i++) {
      code.push(Math.floor(Math.random() * (9 - 1)) + 1);
    }
    this.code = code.join('');
    if (this[BarcodeGenerator.prefix]) {
      console.log(`${this[BarcodeGenerator.prefix]}-${this.code}`);
    } else {
      console.log(this.code);
    }
  }

}

const generator = new BarcodeGenerator(4);

generator[BarcodeGenerator.prefix] = 'AA';
console.log(generator.create());

generator[BarcodeGenerator.prefix] = 'XX';
console.log(generator.create());
console.log(generator.create());
console.log(generator.create());

delete generator[BarcodeGenerator.prefix];
console.log(generator.create());

// Task #2

class HexRange {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  [Symbol.iterator]() {
    let self = this;
    return {
      next() {
        if (self.from <= self.to) {
          return {
            done: false,
            value: (self.from++).toString(16)
          };
        } else {
          return {
            done: true
          };
        }
      }
    }
  }
}

let queue = new HexRange(247, 253);
console.log(...queue);

// Task #3

class DateRange {
  constructor(from, to) {
    this.from = from;
    this.to = to;

  }

  [Symbol.iterator]() {
    const self = this;
    const oneDay = 24 * 60 * 60 * 1000;
    let i = self.from.getTime() - oneDay;
    return {
      next() {
        if (i <= self.to.getTime()) {
          if ((new Date(i + oneDay)).getDay() === 0) {
            i += oneDay * 2;
          } else if ((new Date(i + oneDay)).getDay() === 6) {
            i += oneDay * 3;
          } else {
            i += oneDay;
          }
          return {
            done: false,
            value: new Date(i)
          };
        } else {
          return {
            done: true
          };
        }
      }
    }
  }
}

const from = new Date(2017, 2, 13, 23, 59);
const to = new Date(2017, 2, 21, 0, 1);
let range = new DateRange(from, to);

for (let day of range) {
  console.log(day.toLocaleDateString('ru-Ru'));
}



