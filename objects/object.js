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

studentsAndPoints.forEach(function (val, i) {
  if(i % 2 === 0) {
    var item = {name: studentsAndPoints[i]};
    item.point = studentsAndPoints[i + 1];
    item.show = function () {
      console.log('Студент %s набрал %s баллов', this.name, this.point);
    };
    students.push(item);
  }
});

// Task #2
var newStudents = [
  'Николай Фролов', 0, 'Олег Боровой', 0
];
newStudents.forEach(function (val, i) {
  if(i % 2 === 0) {
    var item = {};
    item.name = newStudents[i];
    item.point = newStudents[i + 1];
    item.show = function () {
      console.log('Студент %s набрал %s баллов', this.name, this.point);
    };
    students.push(item);
  }
});


// Task #3

function changePoints(name, count) {
  students.map(function (names, i) {
    if(names.name == name ) {
      students[i].point += count;
    }
  });

}
changePoints('Ирина Овчинникова', 30);
changePoints('Александр Малов', 30);
changePoints('Николай Фролов', 10);

console.log(students);









