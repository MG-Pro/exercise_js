'use strict';

var positions = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    producer: {
      name: 'Рязанский телепортостроительный завод',
      deferPeriod: 10,
      lot: 3
    },
    price: 10000
  },
  {
    title: 'Ховерборд Mattel 2016',
    producer: {
      name: 'Волжский Ховерборд Завод',
      deferPeriod: 24,
      lot: 14
    },
    price: 9200
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    producer: {
      name: 'Тульский оружейный комбинат',
      deferPeriod: 5,
      lot: 1
    },
    price: 57000
  }
];

// Task #1

function lotCalculator(item, count) {
  let order = {};
  order.lots = Math.ceil(count / item.producer.lot);
  order.total = item.price * order.lots * item.producer.lot;
  return order;
}

console.log(lotCalculator(positions[1], 15));

// Task #2

const deferedPayments = [];

function deferPay(producer, supplySum, supplyDate) {
  let supply = {};
  supply.producer = producer.name;
  supply.amount = supplySum;
  supply.paymentDate = supplyDate;
  supply.paymentDate.setDate(supplyDate.getDate() + producer.deferPeriod);
  deferedPayments.push(supply);
}

deferPay(positions[0].producer, 7200, new Date(2030, 4 - 1, 10));
deferPay(positions[1].producer, 98000, new Date(2030, 7 - 1, 20));
deferPay(positions[2].producer, 120000, new Date(2030, 10 - 1, 15));
deferPay(positions[2].producer, 400000, new Date(2030, 11 - 1, 1));

function printDeferPay(list) {
  list.forEach(function (val) {
    val.paymentDate = val.paymentDate.toLocaleString("ru", {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    });
    console.log(`${val.paymentDate}: ${val.producer}, сумма ${val.amount} Q`);
  })
}

printDeferPay(deferedPayments);

// Task #3

function loadCurrencyJSON() {
  return '{"AUD":44.95,"AZN":33.73,"GBP":73.42,"AMD":0.12,"BYN":30.96,"BGN":32.01,"BRL":18.8,"HUF":0.2,"DKK":8.42,"USD":58.85,"EUR":62.68,"INR":0.88,"KZT":0.18,"CAD":44.74,"KGS":0.85,"CNY":8.55,"MDL":2.94,"NOK":7.02,"PLN":14.55,"RON":13.92,"ZZZ":79.91,"SGD":41.36,"TJS":7.43,"TRY":15.97,"TMT":16.84,"UZS":0.02,"UAH":2.16,"CZK":2.32,"SEK":6.6,"CHF":58.69,"ZAR":4.4,"KRW":0.05,"JPY":0.52}';
}

function convertCurrency(amount, from, to) {
  let currencyList = JSON.parse(loadCurrencyJSON());
  let fromVal, toVal;
  for (let key in  currencyList) {
    if (from === key)
      fromVal = currencyList[key];
    if (to === key)
      toVal = currencyList[key];
  }
  let result = amount * fromVal / toVal;
  return Math.round(result * 100) / 100;

}

console.log(`Сумма ${convertCurrency(7000, 'ZZZ', 'USD')} Q`);
console.log(`Сумма ${convertCurrency(790, 'EUR', 'ZZZ')} Q`);
console.log(`Сумма ${convertCurrency(1800, 'NOK', 'JPY')} Q`);









