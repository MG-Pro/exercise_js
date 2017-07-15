document.getElementById('submit').addEventListener('click', function (e) {
  e.preventDefault();

  var xhr = new XMLHttpRequest();
  var preloader = document.getElementsByClassName('preloader');
  var body = '';
  var formIrem = document.getElementsByClassName('form__item');
  for(var i = 0, sep = '&'; i < formIrem.length; i++) {
    if(i + 1 == formIrem.length)
      sep = '';
    body += formIrem[i].name + '=' + encodeURIComponent(formIrem[i].value) + sep;
  }

  xhr.open('POST', 'http://netology-hj-ajax.herokuapp.com/homework/login_json', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');


  xhr.addEventListener('readystatechange', function () {
    console.log(xhr.readyState + ":" + xhr.status);
    console.log(xhr.responseText);
  });
  xhr.addEventListener('loadstart', function () {
    preloader[0].style.display = 'block';
  });
  xhr.addEventListener('loadend', function () {
    preloader[0].style.display = 'none';
  });


  xhr.responseText;

  xhr.send(body);

});