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