$(document).ready(function () {
  let curList = {};
  let sourceCur;
  let sourceCurList = $("#sourceCur");
  let targetCurList = $("#targetCur");

  if (!curList.length) {
    $.ajax({
      url: "http://university.netology.ru/api/currency",
      type: "GET"
    }).done(function (result) {
      result.sort(function (a, b) {
        if (a.Name < b.Name)
          return -1;
        if (a.Name > b.Name)
          return 1;
        return 0;

      });
      result.forEach(function (val) {
        sourceCurList.append("<option>" + val.Name + "</option>");
        targetCurList.append("<option>" + val.Name + "</option>");
      });
      curList = result;
    });
  }

  $('#sourceSum').on('input', function (e) {
    if (this.value.match(/[^0-9\.?]/g)) {
      this.value = this.value.replace(/[^0-9\.?]/g, '');
    }

  });

  let getCurrencyVal = function (name) {
    let curVal;
    curList.forEach(function (val) {
      if (name === val.Name) {
        curVal = val.Value;
      }
    });
    return curVal;
  };

  sourceCurList.on('change', function (e) {
    let sourceCurrency = $(this).val();
    let valCurrency = getCurrencyVal(sourceCurrency);
    console.log(valCurrency);
  });


});







