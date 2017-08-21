'use strict';
const clients = [{
  name: 'Филип Фрай',
  email: 'fray@mail.un',
  isSubscribed: false,
  orders: [11700, 1980, 450, 5500]
}, {
  name: 'Бендер Сгибатель Родригес',
  email: 'bender.rodriges@rambler.un',
  isSubscribed: true,
  orders: [440, 226, 7650, 2990, 70]
}, {
  name: 'Доктор Джон Зоидберг',
  email: 'zoidberg-md@list.un',
  isSubscribed: true,
  orders: [720]
}];

// Task #1

clients.findByName = function (name) {
  return this.find(function (val) {
    return val.name === name;
  });

};

const clientOne = clients.findByName('Доктор Джон Зоидберг');
console.log(clientOne.email); // zoidberg-md@list.un

const clientTwo = clients.findByName('Люрр');
console.log(typeof clientTwo); // undefined

console.log('\n');

// Task #2

function compareByTotalSumm(left, right) {
  let result = [];
  for (let key of arguments) {
    result.push(key.orders.reduce((sum, val) => {
      return sum + val;
    }, 0));
  }
  if (result[0] < result[1])
    return 1;
  else if (result[0] === result[1])
    return 0;
  else
    return -1;

}

clients
  .sort(compareByTotalSumm)
  .forEach(client => console.log(client.name));

console.log('\n');

// Task #3

function sendMail(email) {
  console.log(`Письмо отправлено на адрес ${email}`);
}

//function getSubscribedEmails(list) {
//  let mailList = [];
//  list.forEach(function (val) {
//    if (val.isSubscribed) {
//      mailList.push(val.email);
//    }
//  });
//  return mailList;
//}

function getSubscribedEmails(list) {
  let mailList = [];
  let trueList = list.filter(function (val) {
    return val.isSubscribed
  });
  trueList.forEach(function (val) {
    mailList.push(val.email);
  });
  return mailList;
}

getSubscribedEmails(clients).forEach(sendMail);
















