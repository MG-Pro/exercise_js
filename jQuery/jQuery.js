$(document).ready(function () {
  'use strict';
  
  let curList = {}; // объект для хранения списка валют
  let sourceCurList = $("#sourceCur"); // поле выбора исходной валюты
  let targetCurList = $("#targetCur"); // поле выборы целевой валюты
  let sourceSum = $('#sourceSum'); // поле ввода количества исходной валюты
  let targetSum = $('#targetSum'); // поле ввода количества целевой валюты
  let sourceCurrencyCount = 0; // количество исходной валюты
  let targetCurrencyCount = 0; // количество целевой валюты
  let sourceCurrency = {}; // объект исходной валюты
  let targetCurrency = {}; // объект целевой валюты
  
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
      sourceCurrency = getCurrencyVal(sourceCurList.val());
      targetCurrency = getCurrencyVal(targetCurList.val());
    });
  }
  
  // получаем значение курса для выбранной валюты
  function getCurrencyVal(name) {
    let curRate;
    curList.some(function (val) {
      if (name === val.Name) {
        curRate = val;
        return true;
      }
    });
    return curRate;
  }
  
  function calcCurrency(point) {
    if (point === undefined || point) {
      targetCurrencyCount = sourceCurrencyCount * sourceCurrency.Value * targetCurrency.Nominal / targetCurrency.Value;
      targetCurrencyCount = Math.round(targetCurrencyCount * 100) / 100;
      targetSum.val(targetCurrencyCount);
    } else {
      sourceCurrencyCount = targetCurrencyCount * targetCurrency.Value * sourceCurrency.Nominal / sourceCurrency.Value;
      sourceCurrencyCount = Math.round(sourceCurrencyCount * 100) / 100;
      sourceSum.val(sourceCurrencyCount);
    }
  }
  
  sourceSum.on('input', function (e) {
    if (this.value.match(/[^0-9\.?]/g))
      this.value = this.value.replace(/[^0-9\.?]/g, '');
    sourceCurrencyCount = this.value;
    calcCurrency();
  });
  
  targetSum.on('input', function (e) {
    if (this.value.match(/[^0-9\.?]/g))
      this.value = this.value.replace(/[^0-9\.?]/g, '');
    targetCurrencyCount = this.value;
    calcCurrency(false);
  });
  
  sourceCurList.on('change', function (e) {
    sourceCurrency = getCurrencyVal($(this).val());
    calcCurrency();
  });
  
  targetCurList.on('change', function (e) {
    targetCurrency = getCurrencyVal($(this).val());
    calcCurrency();
  });
});







