'use strict';

// Task #1

function checkCoupon(code) {
  const regexp = /[^\da-z]/gi;
  code = code.toLowerCase().replace(regexp, '');
  let revCode = code.split('').reverse().join('');
  return code.length >= 10 && code === revCode;
}

let codes = [
  'Madam, I’m Adam',
  'A man, a plan, a canal. Panama',
  '----<-------Eve------->-----',
  '[__777-x-44-x-777__]',
  '1234564321',
  'Olson in Oslo'
];

for (let code of codes) {
  let result = checkCoupon(code) ? 'подходит' : 'не подходит';
  console.log(`Код «${code}» ${result}`);
}

// Task #2

function stripTags(str) {
  return str.replace(/<\/?\w+\s?>/gi, '');
}

const texts = [
  '<strong>Наши</strong> <em>ховерборды</em> лучшие в <u>мире</u>!',
  '<EM>Световой меч</EM> в <strong>каждый</strong> дом!'
];

for (let text of texts) {
  console.log(stripTags(text));
}

// Task #3
const regexp = {
  email: /^[\w-\.]+@\w+\.{1}\w+/gi,
  phone: /^\+{1}7\d{10}$/gi
};

function validate(name, rule) {
  let ruleTemp = rule.slice();
  return ruleTemp.every(val => {
    if(typeof val.rule === 'string') {
      val.rule = regexp[val.name];
    }
    return val.rule.test(name[val.name]);
  });
}

const fields = [
  {name: 'name', rule: /^[a-z ]{5,}$/i},
  {name: 'email', rule: 'email'},
  {name: 'phone', rule: 'phone'}
];

const forms = [
  {name: 'Ivan Ivanov', email: 'ivan@test.co', phone: '+79212753690'},
  {name: 'III', email: 'ivan@test', phone: '11111'}
];

for (let form of forms) {
  console.log(form);
  if (validate(form, fields)) {
    console.log('Ошибок нет');
  } else {
    console.log('Форма заполнена неверно');
  }
}
console.log(fields);



