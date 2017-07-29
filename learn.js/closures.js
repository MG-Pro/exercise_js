'use strict';

// Task #1

function sum(a) {
  return function (b) {
    return a + b;
  }
}

console.log(sum(5)(3));


//Task #2

//function makeBuffer(value) {
//  var bufferValue = '';
//
//  return function (value) {
//    if (!value) {
//      return bufferValue;
//    }
//    bufferValue += value;
//  }
//}
//
//var buffer = makeBuffer();
//
//buffer('Замыкания');
//buffer(' Использовать');
//buffer(' Нужно!');
//
//console.log(buffer());

// Task #3

function makeBuffer(value) {
  var bufferValue = '';

  return function set(value) {
    if (!value) {
      return bufferValue;
    }
    bufferValue += value;
    set.clear = function () {
      bufferValue = 'null';
    }
  }
}

var buffer = makeBuffer();

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

console.log(buffer());

buffer.clear();

console.log(buffer());













