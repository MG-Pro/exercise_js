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

var student = new Student();

// Task #2


function StudentList(groupName, list) {
  this.prototype = Array;
  this.groupName = groupName;
  this.list = [];
  var self = this;
  list.forEach(function (val, i) {
    if(i % 2 === 0) {
      self.list.push({name: val, point: list[i + 1]});
    }
  });
  
  this.add = function (name, point) {
    this.list.push({name:point});
  }
}

var hj2 = new StudentList('HJ-2', studentsAndPoints);

hj2.add('Николай Иванов', 40)

console.log(hj2);
