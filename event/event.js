'use strict';
// Task #1-1
document.getElementById('buttonList').addEventListener('click', function (e) {
  console.log(`Была нажата ${e.target.innerHTML}`);
});

// Task #1-2
var targetElem;
document.getElementById('buttonList2').addEventListener('click', function (e) {
  e.preventDefault();
  if (targetElem)
    targetElem.style.backgroundColor = 'transparent';

  if (e.target.tagName == 'A') {
    targetElem = e.target.parentNode;
    targetElem.style.backgroundColor = 'yellow';
  }
});

// Task #2-1
var eventCount = false;
document.body.addEventListener('click', function (e) {
  if (e.target.nodeName != 'LI' && eventCount == true) {
    var lists = document.querySelectorAll('.form-group ul > li');
    for (var i = 0; i < lists.length; i++) {
      lists[i].style.backgroundColor = 'transparent';
    }
  }
});
document.querySelector('.form-group ul').addEventListener('click', function (e) {
  if (e.target.nodeName != 'LI')
    return;
  if (e.ctrlKey) {
    e.target.style.backgroundColor = '#9a9292';
  } else {
    var lists = document.querySelectorAll('.form-group ul > li');
    for (var i = 0; i < lists.length; i++) {
      lists[i].style.backgroundColor = 'transparent';
    }
    e.target.style.backgroundColor = '#9a9292';
  }
  eventCount = true;
});

// Task #2-2

document.getElementById('exampleInputPassword1').addEventListener('input', function (e) {
  if (this.value.length != 0 && this.value.length < 5) {
    var passInput = document.getElementById('passdiff');
    passInput.style.color = 'red';
    passInput.innerHTML = 'Пароль должен быть длиннее 5 символов';
  } else if (this.value.length == 0) {
    var passInput = document.getElementById('passdiff');
    passInput.innerHTML = '';
  } else {
    var passInput = document.getElementById('passdiff');
    passInput.style.color = 'green';
    passInput.innerHTML = 'Хороший пароль';
  }
});

// Task #2-3

document.getElementById('helpBlock').addEventListener('mouseenter', function (e) {
  this.classList.add('active');
});

document.getElementById('helpBlock').addEventListener('mouseleave', function (e) {
  this.classList.remove('active');
});

// Task #2-4

document.getElementById('slider').addEventListener('mousedown', function (e) {
  var thumb = this.firstElementChild;
  var slider = this;
  var rectSlider = this.getBoundingClientRect();
  var widthSlider = rectSlider.width;
  move(e);
  function move(e) {
    slider.ondragstart = function (e) {
      return false;
    };

    var rectThumb = thumb.getBoundingClientRect();
    var currentPos = rectThumb.left;
    var shift = e.pageX - currentPos;
    var currentLeft =  currentPos - rectSlider.left;
    var pos = currentLeft + shift;
    if(pos < 0) {
      pos *= 0;
    } else if (pos > widthSlider) {
      pos = widthSlider;
    }
    thumb.style.left = pos + 'px';
  }

  this.addEventListener('mousemove', move);
  document.body.addEventListener('mouseup', function () {
    slider.removeEventListener('mousemove', move);
  });

});

//var slider = document.getElementById('slider');
//var item = slider.firstElementChild;
//
//var sliderClientCoords = slider.getBoundingClientRect();
//var sliderCoords = {};
//sliderCoords.left = sliderClientCoords.left + pageXOffset;
//
//item.onmousedown = function (e) {
//
//  var itemClientCoords = item.getBoundingClientRect();
//  var itemCoords = {};
//  itemCoords.left = itemClientCoords.left + pageXOffset;
//
//  var right = slider.offsetWidth - item.offsetWidth;
//  var shiftX = e.pageX - itemCoords.left;
//
//  document.onmousemove = function (e) {
//    var newLeft = e.pageX - sliderCoords.left - shiftX;
//    if (newLeft < 0) newLeft = 0;
//    if (newLeft > right) newLeft = right;
//    item.style.left = newLeft + 'px';
//    return false;
//  }
//
//  document.onmouseup = function () {
//    document.onmousemove = document.onmouseup = null;
//  }
//}












