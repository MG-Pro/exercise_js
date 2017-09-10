'use strict';

function hslToRgb(h, s, l) {
  let r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = function (p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  function colorToHex(color) {
    let hex = Math.round(color * 255).toString(16);
    return hex.length < 2 ? `0${hex}` : hex;
  }

  const color = [r, g, b].map(colorToHex).join('');
  return `#${color}`;
}

class Order {
  constructor(id, weight) {
    this.id = id;
    this.weight = weight;
  }
}

class Truck extends Array {
  constructor(number, weightLimit) {
    super();
    this.number = number;
    this.weightLimit = weightLimit;
  }

  add(order) {
    if (!this.isFit(order)) {
      return false;
    }
    this.push(order);
    return true;
  }

  isFit(order) {
    return this.weightLimit >= (this.totalWeight + order.weight);
  }

  get totalWeight() {
    return this.reduce((total, order) => total + order.weight, 0);
  }

  show() {
    console.log(`Машина №${this.number} (общий вес груза ${this.totalWeight}кг):`);
    this.forEach(order => console.log(`\tЗаказ #${order.id} ${order.weight}кг`));
  }
}

// Task #1



















