function produceDrivingRange(blockRange){
	return function(startPoint, destination){
 let distance = parseInt(destination, 10) - parseInt(startPoint, 10) ;

    if(distance > blockRange){

		return `${distance - blockRange} blocks out of range`;

    } else {
    	return `within range by ${blockRange - distance}`;

    }

	}
}

function produceTipCalculator(rate){
	return function(total){
		return total * rate;

	}
}
function createDriver(){
	let driverId = 0 ;
	return class{
		constructor(name){
			this.name = name;
			this.id = ++driverId;

		}

	}
}