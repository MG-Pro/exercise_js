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
    if(this[BarcodeGenerator.prefix]) {
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
    this.queue = [];

  }

  [Symbol.iterator]() {
    let self = this;
    return {
      next() {
        if (self.from <= self.to) {
          return {
            done: false,
            value: self.from++
          };
        } else {
          return {
            done: true
          };
        }
      }
    }
  };
}


let queue = new HexRange(247, 253);
console.log(...queue);


//return {
//  next() {
//    let item = self.queue[curItem++];
//    return {
//      done: curItem > self.queue.length,
//      value: item
//    }
//  }
//}





