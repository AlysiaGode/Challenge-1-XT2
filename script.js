window.onload = function() {
	var pressureText = document.getElementById('textPressure');
	var pressureData = document.getElementById('pressure');
	var pressure = pressureData.getTotalLength();
	var pres = 60;

	var temperatureText = document.getElementById('textTemperature');
	var temperatureData = document.getElementById('temp');
	var temperature = pressureData.getTotalLength();
	var tem = 44.7;

	var oxygenText = document.getElementById('textOxygen');
	var oxygenData = document.getElementById('o2');
	var oxygen = oxygenData.getTotalLength();
	var oxy = 24.2;
	
	var carbonDioxideText = document.getElementById('textCarbonDioxide');
	var carbonDioxideData = document.getElementById('co2');
	var carbonDioxide = carbonDioxideData.getTotalLength();
	var carbo = 0.4;

	//danger red
	const highPressure = 80;
	const highTemperature = 37; 
	const highCarbonDioxide = 10; 

	//normal green
	const medPressure = 60;
	const medTemperature = 24; 
	const medOxygen = 34;
	const medCarbonDioxide = 2; 

	//danger red
	const lowPressure = 40;
	const lowTemperature = 18; 
	const lowOxygen = 10;


	function calcPressure() {
		calcDataPressure = pressure - (250*pres)/100;
		pressureData.style.strokeDashoffset = calcDataPressure;
		pressureText.innerHTML = pres + "psi".fontsize(4);
		if (pres >= highPressure || pres <= lowPressure) {
			pressureData.style.stroke = "red";
		} else {
			pressureData.style.stroke = "#00ff43";
		}
	}

	function calcTemperature() {
		calcDataTemperature = temperature - (250*tem)/100;
		temperatureData.style.strokeDashoffset = calcDataTemperature;
		temperatureText.innerHTML = tem + "c°".fontsize(4);
		if (tem >= highTemperature || tem <= lowTemperature) {
			temperatureData.style.stroke = "red";
		} else {
			temperatureData.style.stroke = "#00ff43";
		}
	}

	function calcOxygen() {
		calcDataOxygen = oxygen - (250*oxy)/100;
		oxygenData.style.strokeDashoffset = calcDataOxygen;
		oxygenText.innerHTML = oxy + "%".fontsize(4);
		if (oxy <= lowOxygen) {
			oxygenData.style.stroke = "red";
		} else {
			oxygenData.style.stroke = "#00ff43";
		}
	}

	function calcCarbonDioxide() {
		calcDataCarbonDioxide = carbonDioxide - (250*carbo)/100;
		carbonDioxideData.style.strokeDashoffset = calcDataCarbonDioxide;
		carbonDioxideText.innerHTML = carbo + "%".fontsize(4);
		if (carbo >= highCarbonDioxide) {
			carbonDiosxideData.style.stroke = "red";
		} else {
			carbonDioxideData.style.stroke = "#00ff43";
		}
	}

	calcPressure();
	calcTemperature();
	calcOxygen();
	calcCarbonDioxide();
}

