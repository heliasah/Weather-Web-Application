function updateWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    temperatureElement.innerHTML = Math.round(temperature);
    let cityElement = document.querySelector("#weather-city");
    cityElement.innerHTML = response.data.city;
    let descrptionElement = document.querySelector("#description");
    descrptionElement.innerHTML = response.data.condition.description;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = `${response.data.wind.speed}km/h`;
    let iconElement = document.querySelector("#icon");
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="icon" />`;

    // Change background color based on the weather condition
    let bodyElement = document.querySelector("body");
    let weatherCondition = response.data.condition.description.toLowerCase();
    
    if (weatherCondition.includes("sunny") || weatherCondition.includes("clear")){
        bodyElement.style.backgroundColor = "yellow";
    } else if (weatherCondition.includes("clouds")) {
        bodyElement.style.backgroundColor = "gray";
    } else if (weatherCondition.includes("rainy") || weatherCondition.includes("rain")) {
        bodyElement.style.backgroundColor = "blue";
    } else {
        bodyElement.style.backgroundColor = "pink";
    }
}



function searchCity(city) {
  let apiKey = "db7f142eaefbo73ffc22t50dbbc48b65";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(updateWeather);
}


function handleSearch(event){
    event.preventDefault();
    let searchInput = document.querySelector("#cityform-input");
    let cityElement = document.querySelector("#weather-city");
    let cityInput = searchInput.value;

  
    cityElement.innerHTML = cityInput;
    searchCity(cityInput);

}


function displayForecast(){
  let days = ["Tue", "Wed","Thu", "Fri", "Sat"];

  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = "";
  days.forEach(function (day){

      forecastHTML = forecastHTML +
      `
      <div class="weather-forecast-day">
        <div class="forecast-date">${day}</div>
        <div class="forecast-icon">🌤️</div>
        <div class="forecast-temperatures">
          <div class="forecast-temperature">
            <strong>15º</strong>
          </div>
          <div class="forecast-temperature">9º</div>
        </div>
      </div>
    `;

  });

  forecastElement.innerHTML = forecastHTML;

}


let searchCityElement = document.querySelector("#search-form");
searchCityElement.addEventListener("submit",handleSearch);


searchCity("Paris")

displayForecast();




