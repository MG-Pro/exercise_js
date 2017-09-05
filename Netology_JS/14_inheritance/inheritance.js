'use strict';

class Calendar {
  constructor(now = new Date()) {
    this.now = now;
  }

  setDate(now) {
    this.now = now;
  }

  get today() {
    return this.now.toLocaleString('ru-Ru');
  }
}

class PaymentTerminal {
  constructor(title, calendar) {
    this.title = title;
    this.calendar = calendar;
  }

  get status() {
    return this.isActive ? 'работает' : 'недоступен';
  }

  get isActive() {
    return this.checkActive();
  }

  checkActive() {
    return false;
  }
}

class RegistrationError extends Error {
  constructor(field = null) {
    super(`Ошибка в поле ${field}`);
    this.field = field;
  }
}

class NotValidEmailRegistrationError extends RegistrationError {
  constructor(field, email) {
    super(field);
    this.email = email;
  }
}

class NotUniqueRegistrationError extends RegistrationError {
  constructor(field, value) {
    super(field);
    this.value = value;
  }
}

class NotSameRegistrationError extends RegistrationError {
}

function isValidEmail(email) {
  return /^\w+(\.\w+)*@\w+(\.\w+)+$/i.test(email);
}

function isUniqueLogin(login) {
  return !['admin', 'boss'].includes(login);
}

function checkPassword(original, copy) {
  return original === copy;
}

function registerNewUser(data) {
  if (!isValidEmail(data.email)) {
    throw new NotValidEmailRegistrationError('Адрес электронной почты', data.email);
  }
  if (!isUniqueLogin(data.login)) {
    throw new NotUniqueRegistrationError('Логин', data.login);
  }
  if (!checkPassword(data.password, data.passwordCopy)) {
    throw new NotSameRegistrationError('Пароль');
  }
}

// Task #1

class SpaceDate extends Date {
  copy() {
    let copy = new this.constructor;
    copy.setTime(this.getTime());
    return copy;
  }

  getNextDate() {
    let nextDate = this.copy();
    nextDate.setDate(nextDate.getDate() + 1);
    return nextDate;
  }

  getPrevDate() {
    let prevDate = this.copy();
    prevDate.setDate(prevDate.getDate() - 1);
    return prevDate;
  }

  getDayBeginning() {
    let dayBeginning = this.copy();
    dayBeginning.setHours(0, 0, 0, 0);
    return dayBeginning;
  }

  getDayEnd() {
    let dayEnd = this.copy();
    dayEnd.setHours(23, 59, 59, 999);
    return dayEnd;
  }
}

let dateOriginal = new SpaceDate(2017, 1, 22);
let dateCopy = dateOriginal.copy();
dateCopy.setYear(2022);
console.log(`Оригинальная дата: ${dateOriginal.toLocaleDateString('ru-Ru')}`);
console.log(`Измененная копия: ${dateCopy.toLocaleDateString('ru-Ru')}`);

let orderDate = new SpaceDate(2017, 2, 10);
let deliveryDate = orderDate.getNextDate();
console.log(`Дата заказа: ${orderDate.toLocaleDateString('ru-Ru')}`);
console.log(`Дата доставки: ${deliveryDate.toLocaleDateString('ru-Ru')}`);

let supplyDate = new SpaceDate(2017, 3, 3);
let requestDate = supplyDate.getPrevDate();
console.log(`Дата поставки: ${supplyDate.toLocaleDateString('ru-Ru')}`);
console.log(`Дата заявки поставщику: ${requestDate.toLocaleDateString('ru-Ru')}`);

let someDate = new SpaceDate(2017, 2, 10, 12, 44);
let from = someDate.getDayBeginning();
let to = someDate.getDayEnd();
console.log(`В любое время с ${from.toLocaleString('ru-Ru')} по ${to.toLocaleString('ru-Ru')}`);

// Task #2

class AllDayPaymentTerminal extends PaymentTerminal {
  checkActive() {
    return true;
  }
}

class AllDayExceptHolidaysPaymentTerminal extends PaymentTerminal {
  constructor(title, calendar, holidays) {
    super(title, calendar);
    this.holidays = holidays;
  }
  checkActive() {
    let year = new Date();
    year = year.getFullYear();
    return this.holidays.every(function (val) {
      let holidayDate = new Date(year, val.month, val.date);
      let holidayDateStart = holidayDate.getTime();
      let holidayDateEnd = holidayDateStart + 24 * 60 * 60 * 1000;
      if (!(calendar.now.getTime() >= holidayDateStart && calendar.now.getTime() <= holidayDateEnd)) {
        return true;
      }
    });
  }
}

class WorkspacePaymentTerminal extends PaymentTerminal {
  checkActive() {

    if(calendar.now.getDay() === 0 || calendar.now.getDay() === 6) {
      return false;
    }
    let startTime = new Date(calendar.now);
    startTime = startTime.setHours(8, 0, 0, 0);

    let endTime = new Date(calendar.now);
    endTime = endTime.setHours(18, 0, 0, 0);

    if(calendar.now.getTime() > startTime && calendar.now.getTime() < endTime)
      return true;
  }
}

const holidays = [
  {date: 11, month: 3 - 1},
  {date: 23, month: 2 - 1}
];

const calendar = new Calendar();
const terminals = [
  new WorkspacePaymentTerminal('Терминал в офисе Убербанка', calendar),
  new AllDayPaymentTerminal('Терминал в аэропорту', calendar),
  new AllDayExceptHolidaysPaymentTerminal('Терминал в торговом центре',
    calendar, holidays)
];

function showTerminals(date) {
  if (date !== undefined) {
    calendar.setDate(date);
  }
  console.log('\n' + calendar.today);
  terminals
    .filter(terminal => terminal instanceof PaymentTerminal)
    .forEach(terminal => console.log(`${terminal.title} ${terminal.status}`));
}

showTerminals(new Date(2017, 2 - 1, 23));
showTerminals(new Date(2017, 3 - 1, 11));
showTerminals(new Date(2017, 3 - 1, 14, 18, 1));
showTerminals(new Date(2017, 3 - 1, 14, 8, 3));

// Task #3

console.log(`\n`);

function handleRegistration(data) {
  try {
    registerNewUser(data);
    console.log(`Пользователь успешно зарегистрирован`);
  } catch (e) {
    if (e instanceof NotValidEmailRegistrationError) {
      console.log(`"${e.email}" не является адресом электронной почты`);
    } else if (e instanceof NotUniqueRegistrationError) {
      console.log(`Пользователь с логином "${e.value}" уже зарегистрирован`);
    } else if (e instanceof NotSameRegistrationError) {
      console.log(`Введенные пароли не совпадают`);
    }
  }
}

const notValidEmailUser = { email: 'test' };
handleRegistration(notValidEmailUser);

const notUniqueLoginUser = { email: 'test@test.co', login: 'boss' };
handleRegistration(notUniqueLoginUser);

const differentPwUser = { email: 'test@test.co', login: 'ivan',
  password: '123', passwordCopy: '456' };
handleRegistration(differentPwUser);

const normalUser = { email: 'test@test.co', login: 'ivan', password: '123', passwordCopy: '123' };
handleRegistration(normalUser);











