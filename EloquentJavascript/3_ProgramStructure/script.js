// Task #1 Треугольник в цикле

for(var i = 1, s = '#'; i <= 7; i++) {
  console.log(s);
  s += '#';
}

// Task #2 FizzBuzz

for(var i = 1; i <= 100; i++) {
  if(i % 3 == 0)
    console.log('Fizz');
  else if(i % 5 == 0)
    console.log('Buzz');
  else console.log(i)
}

// Task #3 Шахматная доска
var size = 8;
var row = '';

for (var i = 0, j = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    if ((i + j) % 2 === 0)
     row += '_';
    else
     row += '#';
  }
  console.log(row);
  row = '';
}