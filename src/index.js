function updateWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    temperatureElement.innerHTML = Math.round(temperature);
    let cityElement = document.querySelector("#weather-city");
    cityElement.innerHTML = response.data.city;

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