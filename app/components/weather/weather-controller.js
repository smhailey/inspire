import WeatherService from "./weather-service.js";

let _ws = new WeatherService()

function drawWeather() {
	console.log("THE WEATHER MAN SAYS:", _ws.Weather)
	let template = _ws.Weather.weatherTemplate()
	document.querySelector('#weather').innerHTML = template
}

export default class WeatherController {
	constructor() {
		_ws.addSubscriber('weather', drawWeather)
		_ws.getWeather()
	}
}
