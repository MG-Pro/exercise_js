'use strict';
document.onreadystatechange = function(){
  if(document.readyState === 'interactive'){

    let images = document.getElementById('store').children;
    let container = document.getElementById('slider');
    let counter = 0;
    setInterval(() => {
      container.setAttribute('src', images[counter].getAttribute('src'));
      counter++;
      if(counter >= images.length)
        counter = 0;
    }, 5000);
    console.log(images);
  }};