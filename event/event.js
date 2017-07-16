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