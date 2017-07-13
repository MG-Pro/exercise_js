document.getElementById('submit').addEventListener('click', function (e) {
  e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://netology-hj-ajax.herokuapp.com/homework/login_json', true);
  xhr.send();



});