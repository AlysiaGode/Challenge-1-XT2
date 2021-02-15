window.onload = function() {
	// var rangeToMars = 1257;
	// var totalDistanceTraveled = 11492;
	var kmPerUur = 14;

	var distanceText = document.getElementById('distanceTraveledText');
	var rangeMarsText = document.getElementById('rangeText');

	// function calcRange() {
	// 	rangeToMars++; 
		
	// }

	// function calcDistanceTraveled() {

	// }
	function stopSpeed() {
		clearInterval(calcRange);
		rangeToMars = 0;
		rangeMarsText.innerHTML = rangeToMars;
	}

	var landed = document.getElementById("alertBox");
	var incoming = document.getElementById("incomingBox");

	var count = 1; /*laat elke seconde de melding zien*/
	var endCounter = 5; /*na 5 seconde stopt de melding*/

	var rangeToMars = 1000;
	var calcRange = setInterval(function(){
		rangeToMars= rangeToMars - kmPerUur ;
		rangeMarsText.innerHTML = rangeToMars;
		if (rangeToMars <= 0){ /*als de raket op mars is aangekomen de afstand is 0*/
			stopSpeed();
			var showAlertInterval = setInterval(function() {
				if (count == 0) {
					count = 1; /*elke melding duurt 1 sec, als de seconde voorbij is reset dan de timer*/
					landed.style.display = "block";
				} else if(endCounter == 0) {
					clearInterval(showAlertInterval);
					landed.style.display = "none";
				} else {
					--count;
					--endCounter;
					landed.style.display = "none";
				}
			},1000); /*laat de melding 1000 ms zien/doorlopen*, melding duurt 1s totaal 5 sec dus 5x tonen*/
		} 
	},1000);

	function stopCount() {
		clearInterval(calcRangeNear);
	}

	var count2 = 1; /*laat elke seconde de melding zien*/
	var endCounter2 = 5; /*na 5 seconde stopt de melding*/

	var calcRangeNear = setInterval(function(){
		if (rangeToMars <= 900){ /*als de raket mars nadert (900 meter)*/
			stopCount();
			var showBoxInterval = setInterval(function() {
				if (count2 == 0) {
					count2 = 1; /*elke melding duurt 1 sec, als de seconde voorbij is reset dan de timer*/
					incoming.style.display = "block";
				} else if(endCounter2 == 0) {
					clearInterval(showBoxInterval);
					incoming.style.display = "none";
				} else {
					--count2;
					--endCounter2;
					incoming.style.display = "none";
				}
			},1000); /*laat de melding 1000 ms zien/doorlopen*, melding duurt 1s totaal 5 sec dus 5x tonen*/
		} 
	},1000);


}
		// else if (rangeToMars <= 800){ /*als de raket mars nadert (afstand vanaf 800 meter)*/
		// 	var showBoxInterval = setInterval(function() {
		// 		if (count2 == 0) {
		// 			count2 = 1; /*elke melding duurt 1 sec, als de seconde voorbij is reset dan de timer*/
		// 			incoming.style.display = "block";
		// 		} else if(endCounter2 == 0) {
		// 			clearInterval(showBoxInterval);
		// 			incoming.style.display = "none";
		// 		} else {
		// 			--count2;
		// 			--endCounter2;
		// 			incoming.style.display = "none";
		// 		}
		// 	},1000 /*laat de melding 1000 ms zien/doorlopen*, melding duurt 1s totaal 5 sec dus 5x tonen*/)
		// }
	
