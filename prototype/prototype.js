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

function Student(name, point) {
  this.name = name;
  this.point  = point;
  this.show = function () {
    console.log('Студент %s набрал %s баллов', this.name, this.point);
  };
}

// Task #2


function StudentList(groupName, list) {
  StudentList.groupName = groupName;
  Array.apply(this);
}


console.log(StudentList);
