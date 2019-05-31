function produceDrivingRange(blockRange) {
  return function(string1, string2) {
    const begBlock = parseInt(string1, 10)
    const endBlock = parseInt(string2, 10)
    const distance = (endBlock - begBlock)
    const range = Math.abs(blockRange - distance)

    if (distance <= blockRange) {
      return `within range by ${range}`
    } else if (distance > blockRange) {
      return `${range} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function(fare) {
    return (fare * percent)
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name, manufacturePrice) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
