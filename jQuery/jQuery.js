$(document).ready(function () {
  let curList = {}; // объект для хранения списка валют
  let sourceCurList = $("#sourceCur"); // поле выбора исходной валюты
  let targetCurList = $("#targetCur"); // поле выборы целевой валюты
  let sourceSum = $('#sourceSum'); // поле ввода количества исходной валюты
  let targetSum = $('#targetSum'); // поле ввода количества целевой валюты
  let sourceCurrencyCount; // количество исходной валюты
  let targetCurrencyCount; // количество целевой валюты
  let sourceRateCurrency; // курс исходной валюты
  let targetRateCurrency; // курс целевой валюты
  let nominalCurrency;

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
      sourceRateCurrency = getCurrencyVal(sourceCurList.val());
      targetRateCurrency = getCurrencyVal(targetCurList.val());
    });
  }

  // получаем значение курса для выбранной валюты
  function getCurrencyVal(name) {
    let curRate;
    curList.some(function (val) {
      if (name === val.Name) {
        curRate = val.Value;
        return true;
      }
    });
    console.log(curRate);
    return curRate;
  }

  function calcTagetCurrencyVal() {
    targetCurrencyCount = sourceCurrencyCount * sourceRateCurrency / targetRateCurrency ;
    targetCurrencyCount =  Math.round(targetCurrencyCount * 100) / 100;
    targetSum.val(targetCurrencyCount);
  }


  sourceSum.on('input', function (e) {
    if (this.value.match(/[^0-9\.?]/g)) {
      this.value = this.value.replace(/[^0-9\.?]/g, '');
    }
    sourceCurrencyCount = this.value;
    calcTagetCurrencyVal();
  });

  sourceCurList.on('change', function (e) {
    let sourceNameCurrency = $(this).val();
    sourceRateCurrency = getCurrencyVal(sourceNameCurrency);
    calcTagetCurrencyVal();

  });

  targetCurList.on('change', function (e) {
    let targetNameCurrency = $(this).val();
    targetRateCurrency = getCurrencyVal(targetNameCurrency);
    calcTagetCurrencyVal();
  });



});







