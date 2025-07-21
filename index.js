const apiKey = "03d72d9c441a4f41eaae1af9f56a55e9";

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=kolkata&units=metric";


async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data); 

    document.querySelector('.display').innerHTML = data.main.humidity;
}

checkWeather();
