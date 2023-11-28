function currentCity(event) {
  event.preventDefault();
  let searchCityInput = document.querySelector("#search-city-input");
  searchCityInput.value = searchCityInput.value.trim().toUpperCase();

  let liCity = document.querySelector("li#current-city");
  liCity.innerHTML = `${searchCityInput.value}`;

  let now = new Date();
  let liDayTime = document.querySelector("li#current-day-time");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hour = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  liDayTime.innerHTML = `${day}, ${hour}:${minutes}`;
}

let form = document.querySelector("#weather-form");
form.addEventListener("submit", currentCity);
