function produceDrivingRange(blockRange) {
   return function (start, end) {
      const startInt = parseInt(start, 10)
      const endInt = parseInt(end, 10)
      const distance = (endInt - startInt)
      const range = Math.abs(blockRange - distance)
      if (distance <= blockRange) {
         return `within range by ${range}`
      } else if (distance > blockRange) {
         return `${range} blocks out of range`
      }
   }
}

function produceTipCalculator(percentage) {
   return function(subtotal) {
      return subtotal * percentage
   }
}

function createDriver() {
   let driverId = 0

   return class {
      constructor(name) {
         this.name = name
         this.id = ++driverId
      }
   }
}