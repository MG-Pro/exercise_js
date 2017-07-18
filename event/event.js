'use strict';
// Task #1-1
document.getElementById('buttonList').addEventListener('click', function (e) {
  console.log(`Была нажата ${e.target.innerHTML}`);
});

// Task #1-2
var targetElem;
document.getElementById('buttonList2').addEventListener('click', function (e) {
  e.preventDefault();
  if(targetElem)
    targetElem.style.backgroundColor = 'transparent';

  if(e.target.tagName == 'A') {
    targetElem = e.target.parentNode;
    targetElem.style.backgroundColor = 'yellow';
  }
});

// Task #2-1
document.body.addEventListener('click', function (e) {
    var lists = document.querySelectorAll('.form-group ul > li');
    for(var i = 0; i < lists.length; i++) {
      if(e.target != lists[i]) {
        continue;
      }
      lists[i].style.backgroundColor = 'transparent';
    }
});
document.querySelector('.form-group ul').addEventListener('click', function (e) {
  if(e.ctrlKey) {
    e.target.style.backgroundColor = 'grey';
  } else {
    var lists = document.querySelectorAll('.form-group ul > li');
    for(var i = 0; i < lists.length; i++) {
      lists[i].style.backgroundColor = 'transparent';
    }
    e.target.style.backgroundColor = 'grey';
  }
});