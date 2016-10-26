
function coins(amount) {
	// console.log(this.quarters = amount / (.25));
	// console.log(this.dimes = amount / (.10));
	// console.log(this.nickels = amount / (.05));
	// console.log(this.pennies = amount / (.01));
 		var quarters = .25;
		var dimes = .10;
		var nickels = .05;
		var pennies = .01;
		var exactAmount = (amount) / (quarters);
		if (exactAmount > 1) {
	    	var numQuarters = Math.floor((amount) / (quarters));	
	    	console.log("Quarters: " + numQuarters);
	    	amount -= (numQuarters * quarters);
		}
	    if ((amount) / (dimes) > 1) {
			var numDimes = Math.floor((amount) / (dimes));
			console.log("Dimes: " +numDimes);
			amount -= (numDimes * dimes); 
		}

	    if ((amount) / (nickels) > 1) {
			var numNickels = Math.floor((amount) / (nickels));
			console.log("Nickels: " +numNickels);
			amount -= (numNickels * nickels); 
		}

	    if (amount / (pennies) > 1) {
			var numPennies = Math.floor((amount) / (pennies));
			console.log("Pennies: " + numPennies);
			console.log(amount)
		}


		// if (Math.floor(amount) >= 1) {
		// 	console.log("Pennies: " +amount)
		// 	else {
		// 		console.log("No pennies");
		// 	}
		

}


// Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

