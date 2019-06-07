function produceDrivingRange(range) {
  return function(beginning, end) {
    const begInt = parseInt(beginning, 10);
    const endInt = parseInt(end, 10);
    console.log(begInt);
    console.log(endInt);
    const distance = endInt - begInt;
    const check = Math.abs(range - distance);
    if (distance <= range) {
      return `within range by ${check}`;
    }
    else if (distance > range) {
      return `${check} blocks out of range`;
    }
  }
}

function produceTipCalculator(percentage) {
  return function(total) {
    return total * percentage;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}
