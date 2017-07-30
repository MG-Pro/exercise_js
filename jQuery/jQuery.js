let cityList = null;
let sourceCur;

$(document).ready(function () {
  if (cityList === null) {
    $.ajax({
      url: "http://university.netology.ru/api/currency",
      type: "GET"
    }).done(function (cityList) {
      console.log(cityList);
      cityList.sort(function (a, b) {
        if (a.Name < b.Name)
          return -1;
        if (a.Name > b.Name)
          return 1;
        return 0;
      });
      let sourceCurList = $("#sourceCur");
      let targetCurList = $("#targetCur");
      cityList.forEach(function (val) {
        sourceCurList.append("<option>" + val.Name + "</option>");
        targetCurList.append("<option>" + val.Name + "</option>");
      })
    });
  }
});

$('#sourceSum').on('input', function (e) {
  if (this.value.match(/[^0-9\.?]/g)) {
    this.value = this.value.replace(/[^0-9\.?]/g, '');
  }
  this.value;
});









