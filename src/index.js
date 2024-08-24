function handleSearch(event){
    event.preventDefault();
    let searchInput = document.querySelector("#cityform-input");
    let cityElement = document.querySelector("#weather-city");
    let cityInput = searchInput.value;
    cityInput = cityInput.charAt(0).toUpperCase() + cityInput.slice(1).toLowerCase();

  
    cityElement.innerHTML = cityInput;

}

let searchCityElement = document.querySelector("#search-form");
searchCityElement.addEventListener("submit",handleSearch);
