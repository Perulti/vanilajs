const API_KEY = "24f00db72834554dfc0dc3fa9eb326e2";

function onGeo0k(postion) {
    const lat = postion.coords.latitude;
    const lng = postion.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.main.temp} \u00b0C / ${data.weather[0].main}\n\n`;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeo0k, onGeoError);