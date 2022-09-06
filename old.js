let savedCities = [];
let currentData;

let cityInput = document.querySelector("#city");
let unitInput = document.querySelector("#unit");
let countryInput = document.querySelector("#country");
let tempNum = document.querySelector("#tempNum");
let condition = document.querySelector("#condition");
let form = document.querySelector("#form");
let body = document.querySelector("body");
let saveBtn = document.querySelector("#saveBtn");
let saved = document.querySelector("#saved > ul");
let city = cityInput.value;
let country = countryInput.value;
let unit = unitInput.value;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  fetchWeather(city, country, unit);

  city = "";
  country = "";
});

saveBtn.addEventListener("click", () => {
  if (!savedCities.includes(currentData.name)) {
    updateSavedCities(currentData.name, currentData.sys.country);
  }
});

function updateSavedCities(name) {
  savedCities.push(name);
  let li = document.createElement("li");
  li.textContent = name;
  li.addEventListener("click", () => {
    getWeather(name);
  });
  saved.appendChild(li);
}

function fetchWeather(city, country, unit) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c5732aa33b65fc0750b29be0398835ca&units=imperial`
  )
    .then((res) => {
      return res.json();
    })
    .then((body) => {
      console.log(body);
      tempNum.textContent = `It is currently ${body.main.temp} degrees`;
      condition.textContent = `The current condition is ${body.weather[0].main}!`;
      if (body.main.temp > 90) {
        document.body.classList.add("weather-hot");
      } else if (body.main.temp > 85) {
        document.body.classList.add("weather-warm");
      } else {
        document.body.classList.add("weather-normal");
      }

      saveBtn.disabled = false;
    })
    .catch((err) => {
      console.error(err);
    });
}
