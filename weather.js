import { apiKey } from "./src/key";

const searchbox= document.querySelector(".input-field")
const btn = document.querySelector('.btn')

export async function getWeather(city){
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`)
     const data = await response.json();

     return data
}
function parseWeather(data) {
    const parsedWeather = {
        city: data.address,
        temp: Math.round(data.currentConditions.temp) + " °C",
        humidity: data.currentConditions.humidity + " %"
    };

    // Display parsed weather data
    document.querySelector('.city').textContent = parsedWeather.city;
    document.querySelector('.temp').textContent = parsedWeather.temp;
    document.querySelector('.humidity').textContent = parsedWeather.humidity;

    return parsedWeather;
}


btn.addEventListener('click', async () => {
    if(searchbox.value == "" || searchbox.value == null){
        document.querySelector('.city').textContent = "Please enter a valid City"
        document.querySelector('.temp').textContent = "N/A"
    document.querySelector('.humidity').textContent = "N/A"
    }else{
        const rawWeatherData = await getWeather(searchbox.value); 
        parseWeather(rawWeatherData); 
    }
  });