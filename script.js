window.onload = function() {
	var pressureText = document.getElementById('textPressure');
	var pressureData = document.getElementById('pressure');
	var pressure = pressureData.getTotalLength();
	var pres;

	setInterval(function(){
		pres = Math.floor(Math.random() * (48 - 38)) + 38;
	},1000)

	var temperatureText = document.getElementById('textTemperature');
	var temperatureData = document.getElementById('temp');
	var temperature = pressureData.getTotalLength();
	var tem;

	setInterval(function(){
		tem1 = Math.floor(Math.random() * (25 - 17)) + 17;
		tem = tem1.toFixed(1);
	},1000)

	var oxygenText = document.getElementById('textOxygen');
	var oxygenData = document.getElementById('o2');
	var oxygen = oxygenData.getTotalLength();
	var oxy;
	
	setInterval(function(){
		oxy = Math.floor(Math.random() * (37 - 23)) + 23;
	},1000)

	var carbonDioxideText = document.getElementById('textCarbonDioxide');
	var carbonDioxideData = document.getElementById('co2');
	var carbonDioxide = carbonDioxideData.getTotalLength();
	var carbo;

	setInterval(function(){
		carbo1 = Math.floor(Math.random() * (5 - 1)) + 1;
		carbo = carbo1.toFixed(1);
	},1000)

	//danger red
	const highPressure = 80;
	const highTemperature = 37; 
	const highCarbonDioxide = 3; 

	//normal green
	const medPressure = 60;
	const medTemperature = 24; 
	const medOxygen = 34;
	const medCarbonDioxide = 1; 

	//danger red
	const lowPressure = 40;
	const lowTemperature = 18; 
	const lowOxygen = 25;

	// function randomNumberPressure(min, max) {
	// 	return Math.floor(Math.random() * (max-min+1)+min);
	// }

	// var pres = setInterval(function(){
	// 	randomNumberPressure(60, 63);
	// },1000);

	
	
	// const min = 1;
	// const max = 4;
	
	var pressureTextCabin = document.getElementById('textPressureCabin');
	var pressureDataCabin = document.getElementById('pressureCabin');
	var pressureCabin = pressureDataCabin.getTotalLength();
	var presCabin;

	setInterval(function(){
		presCabin = Math.floor(Math.random() * (48 - 38)) + 38;
	},1000)

	function calcPressureCabin() {
		setInterval(function(){ 
			calcDataPressureCabin = pressureCabin - (185*presCabin)/165;
			pressureDataCabin.style.strokeDashoffset = calcDataPressureCabin;
			pressureTextCabin.innerHTML = presCabin + "psia".fontsize(2);
			if (presCabin >= highPressure || presCabin <= lowPressure) {
				pressureDataCabin.style.stroke = "red";
			} else {
				pressureDataCabin.style.stroke = "#00ff43";
			}
		},1000);
	}

	var temperatureTextCabin = document.getElementById('textTemperatureCabin');
	var temperatureDataCabin = document.getElementById('temperatureCabin');
	var temperatureCabin = temperatureDataCabin.getTotalLength();
	var temCabin;

	setInterval(function(){
		temCabin = Math.floor(Math.random() * (25 - 17)) + 17;
	},1000)

	function calcTemperatureCabin() {
		setInterval(function(){ 
			calcDataTemperatureCabin = temperatureCabin - (185*temCabin)/165;
			temperatureDataCabin.style.strokeDashoffset = calcDataTemperatureCabin;
			temperatureTextCabin.innerHTML = temCabin + "c°".fontsize(2);
			if (temCabin >= highTemperature || temCabin <= lowTemperature) {
				temperatureDataCabin.style.stroke = "red";
			} else {
				temperatureDataCabin.style.stroke = "#00ff43";
			}
		},1000);
	}

	var oxygenTextCabin = document.getElementById('textOxygenCabin');
	var oxygenDataCabin = document.getElementById('oxygenCabin');
	var oxygenCabin = oxygenDataCabin.getTotalLength();
	var oxyCabin;

	setInterval(function(){
		oxyCabin = Math.floor(Math.random() * (37 - 23)) + 23;
	},1000)

	function calcOxygenCabin() {
		setInterval(function(){ 
			calcDataOxygenCabin = oxygenCabin - (185*oxyCabin)/165;
			oxygenDataCabin.style.strokeDashoffset = calcDataOxygenCabin;
			oxygenTextCabin.innerHTML = oxyCabin + "%".fontsize(2);
			if (oxyCabin >= highPressure || oxyCabin <= lowOxygen) {
				oxygenDataCabin.style.stroke = "red";
			} else {
				oxygenDataCabin.style.stroke = "#00ff43";
			}
		},1000);
	}

	var carbonTextCabin = document.getElementById('textCarbonCabin');
	var carbonDataCabin = document.getElementById('carbonCabin');
	var carbonCabin = carbonDataCabin.getTotalLength();
	var carboCabin;

	setInterval(function(){
		carboCabin = Math.floor(Math.random() * (5 - 1)) + 1;
	},1000)

	function calcCarbonCabin() {
		setInterval(function(){ 
			calcDataCarbonCabin = carbonCabin - (185*carboCabin)/165;
			carbonDataCabin.style.strokeDashoffset = calcDataCarbonCabin;
			carbonTextCabin.innerHTML = carboCabin + "%".fontsize(2);
			if (carboCabin >= highCarbonDioxide) {
				carbonDataCabin.style.stroke = "red";
			} else {
				carbonDataCabin.style.stroke = "#00ff43";
			}
		},1000);
	}

	calcPressureCabin();
	calcCarbonCabin();
	calcOxygenCabin();
	calcTemperatureCabin();


	function calcPressure() {
		setInterval(function(){ 
			calcDataPressure = pressure - (250*pres)/100;
			pressureData.style.strokeDashoffset = calcDataPressure;
			pressureText.innerHTML = pres + "psia".fontsize(4);
			if (pres >= highPressure || pres <= lowPressure) {
				pressureData.style.stroke = "red";
			} else {
				pressureData.style.stroke = "#00ff43";
			}
		},1000);
	}

	function calcTemperature() {
		setInterval(function(){ 
			calcDataTemperature = temperature - (250*tem)/100;
			temperatureData.style.strokeDashoffset = calcDataTemperature;
			temperatureText.innerHTML = tem + "c°".fontsize(4);
			if (tem >= highTemperature || tem <= lowTemperature) {
				temperatureData.style.stroke = "red";
			} else {
				temperatureData.style.stroke = "#00ff43";
			}
		},1000);
	}

	function calcOxygen() {
		setInterval(function(){ 	
			calcDataOxygen = oxygen - (250*oxy)/100;
			oxygenData.style.strokeDashoffset = calcDataOxygen;
			oxygenText.innerHTML = oxy + "%".fontsize(4);
			if (oxy <= lowOxygen) {
				oxygenData.style.stroke = "red";
			} else {
				oxygenData.style.stroke = "#00ff43";
			}
		},1000);	
	}

	function calcCarbonDioxide() {
		setInterval(function(){ 	
			calcDataCarbonDioxide = carbonDioxide - (250*carbo)/100;
			carbonDioxideData.style.strokeDashoffset = calcDataCarbonDioxide;
			carbonDioxideText.innerHTML = carbo + "%".fontsize(4);
			if (carbo >= highCarbonDioxide) {
				carbonDioxideData.style.stroke = "red";
			} else {
				carbonDioxideData.style.stroke = "#00ff43";
			}
		},1000);	
	}

	calcPressure();
	calcTemperature();
	calcOxygen();
	calcCarbonDioxide();

	var kmPerUur;
	var calcKMU = setInterval(function(){
		kmPerUur = Math.floor(Math.random() * (18 - 14)) + 14;
	},1000)

	var distanceText = document.getElementById('distanceTraveledText');
	var rangeMarsText = document.getElementById('rangeText');

	function stopSpeed() {
		clearInterval(calcRange);
		rangeToMars = 0;
		rangeMarsText.innerHTML = rangeToMars;
	}

	// var landed = document.getElementById("alertBox");
	// var incoming = document.getElementById("incomingBox");

	var count = 1; /*laat elke seconde de melding zien*/
	var endCounter = 5; /*na 5 seconde stopt de melding*/

	var rangeToMars = 1000;
	var calcRange = setInterval(function(){
		rangeToMars = rangeToMars - kmPerUur;
		rangeMarsText.innerHTML = rangeToMars;
		if (rangeToMars <= 0){ /*als de raket op mars is aangekomen de afstand is 0*/
			stopSpeed();
			var showAlertInterval = setInterval(function() {
				if (count == 0) {
					count = 1; /*elke melding duurt 1 sec, als de seconde voorbij is reset dan de timer*/
					// landed.style.display = "block";
				} else if(endCounter == 0) {
					clearInterval(showAlertInterval);
					// landed.style.display = "none";
				} else {
					--count;
					--endCounter;
					// landed.style.display = "none";
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
					// incoming.style.display = "block";
				} else if(endCounter2 == 0) {
					clearInterval(showBoxInterval);
					// incoming.style.display = "none";
				} else {
					--count2;
					--endCounter2;
					// incoming.style.display = "none";
				}
			},1000); /*laat de melding 1000 ms zien/doorlopen*, melding duurt 1s totaal 5 sec dus 5x tonen*/
		} 
	},1000);

	var totalDist = document.getElementById("distanceTraveledText");
	var total = 11749;

	var calcTotalDist = setInterval(function(){ 
		total = total + kmPerUur;
		totalDist.innerHTML = total;
		if (rangeToMars <= 0) {
			clearInterval(calcTotalDist);
		}
	},1000);
	
	var velocityText = document.getElementById('velocityText');
	var velocityData = document.getElementById('velocityBar');

	var altitudeText = document.getElementById('altitudeText');
	var altitudeData = document.getElementById('altitudeBar');
	var altitude = 400;

	var apageeText = document.getElementById('apageeText');
	var apageeData = document.getElementById('apageeBar');
	var apagee = 409;

	var perigeeText = document.getElementById('perigeeText');
	var perigeeData = document.getElementById('perigeeBar');
	var perigee = 256;

	var inclinationText = document.getElementById('inclinationText');
	var inclinationData = document.getElementById('inclinationBar');
	var inclination = 46.1;

	var rangeToMarsData = document.getElementById('rangeToMarsBar');

	var totalDistanceTraveledData = document.getElementById('totalDistanceTraveledBar');

	function calcVelocity() {
		var velocityInt = setInterval(function(){ 
			calcDataVelocity = kmPerUur/100/*max velocity*/*100;
			velocityText.innerHTML = kmPerUur;
			velocityData.style.width = calcDataVelocity+"%";
			if (rangeToMars <= 0) {
				clearInterval(calcKMU);
				kmPerUur = 0;
			}
		},100);
	}	

	function calcAltitude() {
		setInterval(function(){ 
			calcDataAltitude = altitude/1000/*max altitude*/*100;
			altitudeText.innerHTML = altitude;
			altitudeData.style.width = calcDataAltitude+"%";
		},100);
	}	

	function calcApagee() {
		setInterval(function(){ 
			calcDataApagee = apagee/1000/*max apagee*/*100;
			apageeText.innerHTML = apagee;
			apageeData.style.width = calcDataApagee+"%";
		},100);
	}	

	function calcPerigee() {
		setInterval(function(){ 
			calcDataPerigee = perigee/1000/*max perigee*/*100;
			perigeeText.innerHTML = perigee;
			perigeeData.style.width = calcDataPerigee+"%";
		},100);
	}	

	function calcInclination() {
		setInterval(function(){ 
			calcDataInclination = inclination/360/*max graden*/*100;
			inclinationText.innerHTML = inclination;
			inclinationData.style.width = calcDataInclination+"%";
		},100);
	}	

	function calcRangeToMars() {
		var calcMars = setInterval(function(){ 
			calcDataRangeToMars = rangeToMars*1000/*totale afstand naar mars*//total;
			rangeToMarsData.style.width = 100-calcDataRangeToMars+"%";
			if (rangeToMars <= 0) {
				clearInterval(calcMars);
			}
		},100);
	}	

	function calctotalDistanceTraveled() {
		setInterval(function(){ 
			calcDataTotalDistanceTraveled = total/12757/*totaal afgelgde km*/*100;
			totalDistanceTraveledData.style.width = calcDataTotalDistanceTraveled+"%";
		},1000);
	}	

	calcVelocity();
	calcAltitude();
	calcApagee();
	calcPerigee();
	calcInclination();
	calcRangeToMars();
	calctotalDistanceTraveled();


	var cabinStats = document.getElementById("infoCabin");
	var cabinButton = document.getElementById("cabin");
	cabinStats.style.display = "none";
	cabinButton.onclick = function(){
		if (cabinStats.style.display == "grid") {
			cabinStats.style.display = "none";
			cabinButton.style.color = "white";
		} else if (allSystemsStats.style.display == "block" || fuelStats.style.display == "block" || powerStats.style.display == "block") {
			cabinStats.style.display = "grid";
			allSystemsStats.style.display = "none";
			fuelStats.style.display = "none";
			cabinButton.style.color = "#18399a";
			cabinButton.style.textShadow = "0px 2px 7px #030816";
			allSystemsButton.style.color = "white";
			fuelButton.style.color = "white";
			allSystemsButton.style.textShadow = "none";
			fuelButton.style.textShadow = "none";
			powerButton.style.color = "white";
			powerButton.style.textShadow = "none";
			powerStats.style.display = "none";
		} else {
			cabinStats.style.display = "grid";
			cabinButton.style.color = "#18399a";
			cabinButton.style.textShadow = "0px 2px 7px #030816";
		}
	}

	var allSystemsStats = document.getElementById("infoAllSystems");
	var allSystemsButton = document.getElementById("allSystems")
	allSystemsStats.style.display = "block";
	allSystemsButton.style.color = "#18399a";
	allSystemsButton.style.textShadow = "0px 2px 7px #030816";
	allSystemsButton.onclick = function(){
		if (allSystemsStats.style.display == "block") {
			allSystemsStats.style.display = "none";
			allSystemsButton.style.color = "white";
		} else if (cabinStats.style.display == "grid" || fuelStats.style.display == "block" || powerStats.style.display == "block") {
			allSystemsStats.style.display = "block";
			cabinStats.style.display = "none";
			fuelStats.style.display = "none";
			allSystemsButton.style.color = "#18399a";
			allSystemsButton.style.textShadow = "0px 2px 7px #030816";
			fuelButton.style.color = "white";
			cabinButton.style.color = "white";
			cabinButton.style.textShadow = "none";
			fuelButton.style.textShadow = "none";
			powerButton.style.color = "white";
			powerButton.style.textShadow = "none";
			powerStats.style.display = "none";
		} else { 
			allSystemsStats.style.display = "block";
			allSystemsButton.style.color = "#18399a";
			allSystemsButton.style.textShadow = "0px 2px 7px #030816";
		}
	}

	var rocketL = document.getElementById("rocketL");
	var rocketR = document.getElementById("rocketR");
	var dataRocketL;
	var dataRocketR;

	var caretUL = document.getElementById("caretUL");
	var caretUR = document.getElementById("caretUR");

	var caretL = document.getElementById("caretL");
	var caretR = document.getElementById("caretR");

	setInterval(function(){
		dataRocketL = Math.floor(Math.random() * (60 - 24)) + 24;
	},1000)

	setInterval(function(){
		dataRocketR = Math.floor(Math.random() * (60 - 24)) + 24;
	},1000)

	var dataR;
	var dataL;

	setInterval(function(){
		dataL = dataRocketL;
	},1010)

	setInterval(function(){
		dataR = dataRocketL;
	},1010)

	function calcFuel() {
		setInterval(function(){
			if (dataRocketR < dataR) {
				caretR.style.display = "block";
				caretUR.style.display = "none";
			} else if (dataRocketR > dataR) {
				caretUR.style.display = "block";
				caretR.style.display = "none";
			} else {
				caretUR.style.display = "none";
				caretR.style.display = "none";
			}

			if (dataRocketL < dataL) {
				caretL.style.display = "block";
				caretUL.style.display = "none";
			} else if (dataRocketL > dataL) {
				caretUL.style.display = "block";
				caretL.style.display = "none";
			} else {
				caretUL.style.display = "none";
				caretL.style.display = "none";
			}
			rocketR.innerHTML = dataRocketR + "%";
			rocketL.innerHTML = dataRocketL + "%";
		},1000)
	}

	calcFuel();

	var fuelStats = document.getElementById("infoFuel");
	var fuelButton = document.getElementById("fuel")
	fuelButton.onclick = function(){
		if (fuelStats.style.display == "block") {
			fuelStats.style.display = "none";
			fuelButton.style.color = "white";
		} else if (allSystemsStats.style.display == "block" || cabinStats.style.display == "grid" || powerStats.style.display == "block") {
			fuelStats.style.display = "block";
			allSystemsStats.style.display = "none"; 
			cabinStats.style.display = "none";
			fuelButton.style.color = "#18399a";
			fuelButton.style.textShadow = "0px 2px 7px #030816";
			allSystemsButton.style.color = "white";
			cabinButton.style.color = "white";
			cabinButton.style.textShadow = "none";
			allSystemsButton.style.textShadow = "none";
			powerButton.style.color = "white";
			powerButton.style.textShadow = "none";
			powerStats.style.display = "none";
		} else {
			fuelStats.style.display = "block";
			fuelButton.style.color = "#18399a";
			fuelButton.style.textShadow = "0px 2px 7px #030816";
		}
	}

	var powerStats = document.getElementById("infoPower");
	var powerButton = document.getElementById("power")
	powerButton.onclick = function(){
		if (powerStats.style.display == "block") {
			powerStats.style.display = "none";
			powerButton.style.color = "white";
		} else if (allSystemsStats.style.display == "block" || cabinStats.style.display == "grid" || fuelStats.style.display == "block") {
			powerStats.style.display = "block";
			allSystemsStats.style.display = "none"; 
			cabinStats.style.display = "none";
			powerButton.style.color = "#18399a";
			powerButton.style.textShadow = "0px 2px 7px #030816";
			allSystemsButton.style.color = "white";
			cabinButton.style.color = "white";
			cabinButton.style.textShadow = "none";
			allSystemsButton.style.textShadow = "none";
			fuelButton.style.color = "white";
			fuelButton.style.textShadow = "none";
			fuelStats.style.display = "none";
		} else {
			powerStats.style.display = "block";
			powerButton.style.color = "#18399a";
			powerButton.style.textShadow = "0px 2px 7px #030816";
		}
	}

	// var stars = document.getElementById('stars');
	// var stars2 = document.getElementById('stars2');
	// var stars3 = document.getElementById('stars3');

	// function drawStars() {
	// 	var draw = setInterval(function() {
	// 		stars.style.width = "5px"/*randomStars(0, 2000)*/;
	// 	} ,1000);
	// }

	// drawStars();
}
