var newQuotes = function() {
	var quoteResponseHandler = function() {
		let data = JSON.parse(this.responseText);
			data.map(data => {
				let div =document.createElement('div');
				div.innerText= data.quote;
				document.getElementById('quotes').appendChild(div);
			});
	};	

	var request = new XMLHttpRequest();
	request.addEventListener("load", quoteResponseHandler);
	request.open("GET", "/quotes");
	request.send();
};

var getWeatherForecast = function () {
	var weatherResponseHandler = function() {
		let response = JSON.parse(this.responseText);
		let shortResponse =response.items[0].forecasts.slice(0,5);
			shortResponse.map(element => {
				let weather =document.createElement('div');
				weather.innerText= `${element.area} : ${element.forecast}`;
				document.getElementById('ty').appendChild(weather);
			});
	};	
	var request = new XMLHttpRequest();
	request.addEventListener("load", weatherResponseHandler);
	request.open("GET", "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast");
	request.send();
};

window.onload = function () {
	newQuotes();
	getWeatherForecast();
};



