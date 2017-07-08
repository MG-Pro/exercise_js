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

//students.forEach(function (val, i, students) {
//  console.log('Студент ' + students[i] + ' набрал ' + points[i] + ' баллов');
//});

// Task #3

//var maxPointIn;
//var max = 0;
//points.reduce(function (prev, elem, i) {
//
//  if(max < elem) {
//    maxPointIn = i;
//    max = elem
//  }
//  return prev = elem;
//});
//
//console.log('Студент набравший максимальный балл: ' + students[maxPointIn] + ' (' + points[maxPointIn] + ' баллов)');

// Task #4

//function changePoints(name, count) {
//  students.map(function (names, i) {
//    if(names == name ) {
//      points[i] += count;
//    }
//  });
//
//}
//changePoints('Ирина Овчинникова', 30);
//changePoints('Александр Малов', 30);
//
//console.log(students);
//console.log(points);

// Task #5

function getTop(list, point, count) {
  var maxPointIn;
  var max = 0;
  var studentsReating = [];
  console.log('Топ ' + count + ' :\n');
  for(var i = 0; i < count; i++) {
    point.reduce(function (prev, elem, i) {
      if (max < elem) {
        maxPointIn = i;
        max = elem
      }
      return prev = elem;
    });
      studentsReating.push(list[maxPointIn]);
      studentsReating.push(point[maxPointIn]);
      delete point[maxPointIn];
      max = 0;
      maxPointIn = 0;

  }
  studentsReating.forEach(function (name, j) {
      if(j % 2 === 0) {
        console.log(studentsReating[j] + ' - ' + studentsReating[j + 1] + ' баллов');
      }
  });
}
getTop(students, points, 5);





