function produceDrivingRange(blockRange) {
    return function(blockOne, blockTwo){
        let blockNum = Math.abs(parseInt(blockOne) - parseInt(blockTwo));
        let outRange = Math.abs(blockNum - blockRange);
        if (blockRange > blockNum) {
            return `within range by ${blockNum}`
        } else {
            return `${outRange} blocks out of range`
        }
    };
}

function produceTipCalculator(percentage) {
    return function(tip) {
        return tip * percentage;
    }
}

function createDriver(){
    let driverId = 0;

    return class {
        constructor(name) {
            this.name = name;
            this.id = ++driverId;
        }
    }
}