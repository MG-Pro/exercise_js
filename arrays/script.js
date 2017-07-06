// console.log(studentsAndPoints.length);

// Task #1

//var students = [];
//var points = [];
//for(var i = 0; i < studentsAndPoints.length; i++) {
//  if(i % 2 === 0) {
//    students.push(studentsAndPoints[i]);
//  } else {
//    points.push(studentsAndPoints[i]);
//  }
//}
//console.log(students, points);
//
//for(i = 0; i < students.length; i++) {
//  console.log('Студент ' + students[i] + ' набрал ' + points[i] + ' баллов');
//}
//
//for(var i = 0; i < studentsAndPoints.length; i++) {
//  if(i % 2 === 0)
//    console.log()
//}

// Task #1-2

for(var i = 0; i < studentsAndPoints.length; i++) {
  if (i % 2 === 0) {
    console.log('Студент ' + studentsAndPoints[i] + ' набрал ' + studentsAndPoints[i + 1] + ' баллов');
  }
}



// Task #2

//var maxPointIn = 0;
//var maxPoint = 0;
//
//for(var i = 0; i < studentsAndPoints.length; i++) {
//  if(i % 2 === 1) {
//    if (maxPoint < studentsAndPoints[i]) {
//      maxPointIn = i;
//      maxPoint = studentsAndPoints[i];
//    }
//  }
//}
//console.log('Студент ' + studentsAndPoints[maxPointIn - 1] + ' имеет максимальный балл ' + studentsAndPoints[maxPointIn]);

// Task #3

//var newStudents = ['Николай Фролов', 0, 'Олег Боровой', 0];
//for (var i = 0; i < newStudents.length; i++) {
//  studentsAndPoints.push(newStudents[i]);
//}
//// console.log(studentsAndPoints);
//
//// Task #4
//
//for (var i = 0; i < studentsAndPoints.length; i++) {
//  for (var j = 0; j < newStudents.length; j++) {
//    if (studentsAndPoints[i] === newStudents[j] && typeof newStudents[j] === 'string') {
//      studentsAndPoints[i + 1] += 10;
//    }
//  }
//}
//console.log(studentsAndPoints);
//
//// Task #5
//
//for(var i = 0; i < studentsAndPoints.length; i++) {
//  if(studentsAndPoints[i] === 0) {
//    console.log(studentsAndPoints[i - 1]);
//    studentsAndPoints.splice(i - 1, 2);
//  }
//}
//console.log(studentsAndPoints);



