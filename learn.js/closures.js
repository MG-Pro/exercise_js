'use strict';

// Task #1

function sum(a) {
  return function (b) {
    return a + b;
  }
}

console.log(sum(5)(3));


// Task #2-#3

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

// Task #4

var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

function byField(val) {
  return function (a, b) {
    return a[val] > b[val] ? 1 : -1;
  }
}

users.sort(byField('name'));
users.forEach(function (user) {
  console.log(user.name);
});

users.sort(byField('age'));
users.forEach(function (user) {
  console.log(user.name);
});

// Task #5

function filter(arr, func) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr[i] = func;
  }
  return newArr;
}

function inBetween(a, b) {

}

var arr = [1, 2, 3, 4, 5, 6, 7];


console.log(filter(arr, inBetween(3, 6))); // 3,4,5,6

console.log(filter(arr, inArray([1, 2, 10]))); // 1,2









