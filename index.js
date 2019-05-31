
function produceDrivingRange(blockRange){
	return function(str1, str2){
		let start = parseInt(str1);
		let end = parseInt(str2);
		let distance = end - start;
		let diff = blockRange - distance;


		if (diff > 0){
			return `within range by ${diff}`
		}else{
			return `${Math.abs(diff)} blocks out of range`
		}

	}
}

function produceTipCalculator(tip) {
	return function(fare){
		return tip * fare;

	}
}


function createDriver(){
	let DriverId = 0;
	return class {
		constructor(name){
			this.name = name;
			this.id = ++DriverId;
		}
	}
};

