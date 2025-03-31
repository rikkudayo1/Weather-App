const apiKey = 'd5690fb37c81122f1d55271a17897dc8';
const api = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('location-input');
const button = document.getElementById('buttona');

const locationDisplay = document.getElementById('location');
const tempDisplay = document.getElementById('temp');
const conditionDisplay = document.getElementById('condition');
const humidDisplay = document.getElementById('humid')
const windspeedDisplay = document.getElementById('windspeed')

button.addEventListener('click', () => {
    const inputValue = locationInput.value;
    if (inputValue) {
        fetchWeather(inputValue);
    }
});

function fetchWeather(location) {
    const url = `${api}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                locationDisplay.innerText = data.name;
                tempDisplay.innerText = `${data.main.temp}°C`;
                conditionDisplay.innerText = data.weather[0].description;
                humidDisplay.innerText = `humidity : ${data.main["humidity"]}%`;
                windspeedDisplay.innerText = `windspeed : ${data.wind["speed"]} km/h`
            } else {
                alert('Error: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Something went wrong, please try again.');
        });
}
