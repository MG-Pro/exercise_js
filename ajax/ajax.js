document.getElementById('submit').addEventListener('click', function (e) {
  e.preventDefault();

  var xhr = new XMLHttpRequest();
  var preloader = document.getElementsByClassName('preloader');
  var body = '';
  var formIrem = document.getElementsByClassName('form__item');
  var result;
  for (var i = 0, sep = '&'; i < formIrem.length; i++) {
    if (i + 1 == formIrem.length)
      sep = '';
    body += formIrem[i].name + '=' + encodeURIComponent(formIrem[i].value) + sep;
  }

  xhr.open('POST', 'http://netology-hj-ajax.herokuapp.com/homework/login_json', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.addEventListener('loadstart', function () {
    preloader[0].style.display = 'block';
  });
  xhr.addEventListener('loadend', function () {
    preloader[0].style.display = 'none';
  });

  xhr.addEventListener('load', function () {
    console.log(xhr.readyState + ":" + xhr.status);
    if (xhr.readyState == '4' && xhr.status == '200') {
      result = JSON.parse(xhr.responseText);
      document.forms[0].style.display = 'none';
      document.getElementsByClassName('profile')[0].style.display = 'block';
      document.getElementsByClassName('profile__img')[0].setAttribute('src', result.userpic);
      document.getElementsByClassName('profile__fullname')[0].innerHTML = result.name + ' ' + result.lastname;
      if(result.online) {
        document.getElementById('profile__online-mark').style.backgroundColor = 'green';
      } else {
        document.getElementById('profile__online-mark').style.backgroundColor = 'grey';
      }
      var profile__item =  document.getElementsByClassName('profile__item');
      profile__item[0].innerHTML = 'Age: ' + result.age;
      profile__item[1].innerHTML = 'Country: ' + result.country;
      profile__item[2].innerHTML = 'Job: <br> Company: ' + result.job.company + '<br>' + 'Position: ' + result.job.position;
      profile__item[3].innerHTML = 'Hobbies: ' + result.hobbies.join(', ');

      console.log(result);
    } else {
      var errorElem = document.getElementsByClassName('form__error')[0];
      errorElem.innerHTML = 'Error';
    }
  });
  xhr.send(body);
});

document.getElementsByClassName('profile_button')[0].addEventListener('click', function () {
  document.getElementsByClassName('profile')[0].style.display = 'none';
  document.forms[0].style.display = 'inline-block';
});