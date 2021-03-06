// Task #1

let taxCount = 0;
const TAX_RATE = 73;

function getTax(cost) {
  taxCount += cost * TAX_RATE / 100;
}

getTax(30000);
getTax(785335);
getTax(55662525);
getTax(787453);

console.log(`Налог с продаж (${TAX_RATE}%) к оплате: ${taxCount} Q`);

// Task #2
console.log('\n');

let residue = 30;

function availabilityWrap(width, height, length) {
  let area = 2 * (width * height + width * length + height * length);

  if (residue >= area) {
    residue -= area;
    return [true, width, height, length];
  } else {
    return [false, width, height, length];
  }
}

function printResult(width, height, length) {
  let result = availabilityWrap(width, height, length);
  if (result[0]) {
    console.log(`Заказ (${result[1]}/${result[2]}/${result[3]} метра) упакован, осталось упаковочной бумаги ${residue} м2`);
  } else {
    console.log(`Заказ (${result[1]}/${result[2]}/${result[3]} метра) не упакован, осталось упаковочной бумаги ${residue} м2`);
  }
}

printResult(1, 0.2, 0.7);
printResult(3, 2, 1);
printResult(2, 0.5, 0.1);
printResult(3, 7, 1);

// Task #3
console.log('\n');

let charges = [7, 2, 1];
let counters = [];

for (let i = 0; i < charges.length; i++) {
  counters[i] = function () {
    if (charges[i] > 0) {
      charges[i]--;
      console.log(`Телепорт ${i + 1} использован заряд ${charges[i]} единиц`);
    } else {
      console.log(`Телепорт ${i + 1} недоступен, требуется перезарядка`);
    }
  }
}

counters[2]();
counters[1]();
counters[0]();
counters[0]();
counters[1]();
counters[2]();











