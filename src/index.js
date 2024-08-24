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

let searchCityElement = document.querySelector("#search-form");
searchCityElement.addEventListener("submit",handleSearch);


searchCity("Paris")