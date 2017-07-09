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
    }
    students.push(item);
  }
});

console.log(students);
//















