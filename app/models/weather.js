export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.kelvin = data.main.temp
    this.farenheit = ((9 / 5) * (this.kelvin - 273) + 32).toFixed(0)
  }

  weatherTemplate() {
    return `
      <div>
				  <p>${this.city} Weather</p>
				  <p>Temperature: ${this.farenheit}°F</p>
		  </div>
          `
  }
}