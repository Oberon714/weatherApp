import { apiKey } from "./src/key";

const searchbox= document.querySelector(".input-field")
const btn = document.querySelector('.btn')

export async function getWeather(pop){
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${pop}?key=${apiKey}`)
     const data = await response.json();
     console.log(data)
 
     document.querySelector('.city').textContent = data.address; 
     document.querySelector('.temp').textContent =  Math.round(data.currentConditions.temp) + " °C"; 
     document.querySelector('.humidity').textContent = data.currentConditions.humidity
}


searchbox.addEventListener('click')
btn.addEventListener('click',  () => {
    getWeather(searchbox.value)
    
})