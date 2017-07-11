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
  if(!list)
    list = [];
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
    this.list.push({name:name, point:point});
  }
}

// Task #3

var hj2 = new StudentList('HJ-2', studentsAndPoints);

// Task #4

hj2.add('Николай Иванов', 0);
hj2.add('Иван Сергеев', 50);
hj2.add('Руслан Чумаков', 10);
hj2.add('Александр Петров', 40);
hj2.add('Ольга Ушакова', 20);

// Task #5

var html7 = new StudentList('html7');

html7.add('Светлана Степанова', 0);
html7.add('Павел Поляков', 20);
html7.add('Ольга Терешина', 30);
html7.add('Петр Макаров', 50);
html7.add('Федор Киреев', 90);

// Task #6

StudentList.prototype.show = function () {
  console.log('Группа %s (%s студентов)', this.groupName, this.list.length);
  this.list.forEach(function (val, i) {
    console.log('Студент %s набрал %s баллов', val.name, val.point);
  });
};
html7.show();

// Task #7

StudentList.prototype.delete = function (name) {
  var self = this;
  this.list.forEach(function (val, i) {
    if(val.name == name)
      self.list.splice(i, 1);
  })
}

function replace(source, target, name) {
  var student = source.list.filter(function (val, i) {
      return val.name == name;
  });
  source.delete(name);
  target.add(student[0].name, student[0].point);
  
}
//hj2.add(html7.list[4].name, html7.list[4].point);

replace(html7, hj2, 'Федор Киреев');

console.log(html7);
console.log(hj2);












