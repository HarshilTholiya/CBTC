const inputValue = document.querySelector('.input-val');
const searchBtn = document.getElementById('searchButton');
const weather_status = document.querySelector('.weather-status');
var element = document.getElementById('backgroundContainer');
const not_found = document.querySelector('.not-found');
const display = document.querySelector('.display');
const temperature = document.querySelector('.weather-data');
const description = document.querySelector('.weather-data2');
const humidity = document.getElementById('humidity');
const visibility = document.getElementById('visibility');
const wind_speed = document.getElementById('wind-speed');

async function weatherCheck(city){

    if(inputValue.value == '')
        return;

    const API_KEY = "61efc05ba330715acf081c9329ac3ca4";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const weather_data = await fetch(`${URL}`).then(response => response.json());

        
    if(weather_data.cod === `404`){

        not_found.style.display = "flex";
        display.style.display = "none";

        return;
    }

    not_found.style.display = "none";
    display.style.display = "flex";

    temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}<sup>°C</sup>`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    visibility.innerHTML = `${weather_data.visibility/1000} Km`;
    humidity.innerHTML = `${weather_data.main.humidity} %`; 
    wind_speed.innerHTML = `${weather_data.wind.speed} Km/h`;

    switch(weather_data.weather[0].main){

        
        case 'Rain':
            weather_status.src = "rain.png";
            element.style.backgroundImage = "url('Rain.jpeg')";
            break;

        case 'Clouds':
            weather_status.src = "cloudy.png";
            element.style.backgroundImage = "url('Clouds.jpeg')";
            break;

        case 'Mist':
            weather_status.src = "mist.png";
            element.style.backgroundImage = "url('Mist.jpeg')";
            break;

        case 'Snow':
            weather_status.src = "snow.png";
            element.style.backgroundImage = "url('Snow.jpeg')";
            break;

        case 'Clear':
            weather_status.src = "clear.png";
            element.style.backgroundImage = "url('Clear.jpeg')";
            break; 

        case 'Smoke':
            weather_status.src = "smoke.png";
            element.style.backgroundImage = "url('Smoke.jpeg')";
            break;

        case 'Haze':
            weather_status.src = "mist.png";
            element.style.backgroundImage = "url('Haze.jpeg')";
            break; 
        
        case 'Fog':
            weather_status.src = "smoke.png";
            element.style.backgroundImage = "url('Fog.jpeg')";
            break;

    }
}

searchBtn.addEventListener('click', ()=>{
    document.body.classList.add('blur-background');
    setTimeout(() => {
        weatherCheck(inputValue.value);
    }, 500);
    setTimeout(() => {
        document.body.classList.remove('blur-background');
    }, 1000); 
});
