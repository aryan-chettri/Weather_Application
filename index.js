const apiKey = "03d72d9c441a4f41eaae1af9f56a55e9";

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=";
const apiUrl1 =
  "https://api.openweathermap.org/data/2.5/weather?q=kolkata&units=metric";


async function checkWeather(){

  const inputField = document.getElementById('cityInput');

  console.log(inputField.value);

  console.log(inputField);

  const response = await fetch(apiUrl+`${inputField.value}`+`&appid=${apiKey}`+`&units=metric`);
  const data = await response.json();

  console.log(data);
  
  document.querySelector('#cityName').innerHTML= inputField.value;
  document.querySelector('#temperature').innerHTML = `${data.main.temp}°C`;
  document.querySelector('#wind-speed').innerHTML = `${data.wind.speed}km/hrs`;

  // document.querySelector('.display').innerHTML = data.main.humidity;
}


