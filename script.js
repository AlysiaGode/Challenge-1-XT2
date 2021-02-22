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
	calcKMU = setInterval(function(){
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
		velocityInt = setInterval(function(){ 
			calcDataVelocity = kmPerUur/100/*max velocity*/*100;
			velocityText.innerHTML = kmPerUur;
			velocityData.style.width = calcDataVelocity+"%";
			if (rangeToMars <= 0) {
				clearInterval(velocityInt);
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
