const date = document.querySelector('#date');
const city = document.querySelector('#city');
const temp = document.querySelector('#temp');
const tempImg = document.querySelector('#temp-img');
const description = document.querySelector('#description');
const tempMax = document.querySelector('#temp-max');
const tempMin = document.querySelector('#temp-min');

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let dateObj = new Date();
let month = monthNames[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate(); // corrigido
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month} ${day}, ${year}`;

const getWeather = async () => {
    try {
        const cityName = document.getElementById('search-bar-input').value;    
        const weatherDataFetch = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0c661f19313c116fc086df0a9a351a24&units=metric&lang=en`
        );  
    
        const weatherData = await weatherDataFetch.json();    
        console.log(weatherData);
        
        city.innerHTML = weatherData.name;
        description.innerHTML = weatherData.weather[0].description;
        tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png"/>`;
        temp.innerHTML = `<h2>${Math.round(weatherData.main.temp)}°C</h2>`;    
        tempMax.innerHTML = `${Math.round(weatherData.main.temp_max)}°C`;
        tempMin.innerHTML = `${Math.round(weatherData.main.temp_min)}°C`;
    }
    catch(error) {
        console.log(error)
    }
}
