import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {
	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
	let template = _weatherService.Weather.weatherTemplate()
	document.querySelector('#weather').innerHTML = template
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}
}
