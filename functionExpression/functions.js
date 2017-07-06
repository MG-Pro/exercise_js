var studentsAndPoints =
      [
        'Алексей Петров', 0,
        'Ирина Овчинникова', 60,
        'Глеб Стукалов', 30,
        'Антон Павлович', 30,
        'Виктория Заровская', 30,
        'Алексей Левенец', 70,
        'Тимур Вамуш', 30,
        'Евгений Прочан', 60,
        'Александр Малов', 0
      ];

// Task #1

var students = [];
var points = [];

students = studentsAndPoints.filter(function (number, i) {
  return !(i % 2);
});

points = studentsAndPoints.filter(function (number, i) {
  return i % 2;
});

//console.log(students);
//console.log(points);

// Task #2

students.forEach(function (val, i, students) {
  console.log('Студент ' + students[i] + ' набрал ' + points[i] + ' баллов');
});