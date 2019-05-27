function produceDrivingRange(num) {
  return function(string1, string2){
    let num1 = parseInt(string1, 10)
    let num2 = parseInt(string2, 10)
    let distance = Math.abs(num1-num2)
    let result = Math.abs(num-distance)

    if ( (num - distance)> 0 ){
      return `within range by ${result}`
    } else {
      return `${result} blocks out of range`
    }
  }
}

function produceTipCalculator(percent){
  return function(base){
    return base * percent
  }
}

function createDriver(){
  let DriverId = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++ DriverId;
    }
  }
}
