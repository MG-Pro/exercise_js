'use strict';
let result = 0, operation, r = null, r2 = null;
let arrNum = [];
let resultElem = document.getElementById('result');

function num(custNum) {
  let x = arrNum.indexOf('.'); // нет . -> x=-1
  if (custNum === '.') {
    if (x === -1)
      arrNum.push(custNum);
  } else
    arrNum.push(custNum);
  r = parseFloat(arrNum.join(''));
  resultElem.value = arrNum.join('');
}

function operat(custOperation) {
  if (custOperation === 'C')
    reset();
  else if (custOperation === '+/-')
    invers();
  else if (custOperation !== '=') {
    operation = custOperation;
    r2 = r;
    r = null;
    arrNum = [];
  } else {
    res(operation);
  }
}

function res(operation) {
  if (r && r2) {
    if (operation === "+")
      result = r2 + r;
    else if (operation === "-")
      result = r2 - r;
    else if (operation === "*")
      result = r2 * r;
    else if (operation === "/")
      result = r2 / r;
    resultElem.value = result;
  }
}

function reset() {
  arrNum.length = 0;
  r = 0;
  r2 = 0;
  resultElem.value = r;
}

function invers() {
  r = r * -1;
  resultElem.value = r;
}

function pseudoActive(val) {
  let buttonsList = document.getElementsByClassName('button');
  for (let key of buttonsList) {
    if (key.innerText === val) {
      key.classList.toggle('active');
      setTimeout(function () {
        key.classList.toggle('active');
      }, 150);
      break;
    }
  }
}

function buttonAction(e) {
  let elemVal;
  if(e.type === 'keydown') {
    console.log(e.key);
    elemVal = e.key;
    if(elemVal === 'Enter')
      elemVal = '=';
    if(elemVal === 'Escape')
      elemVal = 'C';
    pseudoActive(elemVal);
  } else {
    let elem = e.target;
    elemVal = elem.innerText;
  }
  if (parseInt(elemVal) || parseInt(elemVal) === 0) {
    num(parseInt(elemVal));
  } else if (elemVal === '.') {
    num(elemVal);
  } else {
    operat(elemVal);
  }
}
document.getElementById('calc').addEventListener('click', buttonAction);
document.addEventListener('keydown', buttonAction);
