function produceDrivingRange(blockRange) {
  return function(first, second) {
    let numberOfBlocks = Math.abs(parseInt(first) - parseInt(second));

    let differenceOfBlocks = Math.abs(numberOfBlocks - blockRange);

    if (numberOfBlocks > blockRange) {
      return `${differenceOfBlocks} blocks out of range`;
    } else if (numberOfBlocks <= blockRange) {
      return `within range by ${differenceOfBlocks}`;
    };
  };
}

function produceTipCalculator(amount) {
  return function(tip) {
    return tip * amount;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
