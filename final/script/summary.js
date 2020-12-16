/*-----------------------Weather Summary------------------------------------------*/
function searchWeather(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=195414e543ad58fb7aea951c77ee178a&units=imperial`)
        .then((response) => response.json())
        .then((jsObject) => {

            const condition = document.querySelector('#condition');
            const temp = document.querySelector('#temp');
            const high = document.querySelector('#high');
            const humidity = document.querySelector('#humidity');
            const speed = document.querySelector('#speed');
            const nameCity = document.querySelector('#nameCity');

            document.querySelector('.summary').style.backgroundColor = "#407899";
            document.querySelector('.summary').style.border = "1px solid #777";
            document.querySelector('.summary').style.boxShadow = "0 0 40px #444";

            nameCity.textContent = `${cityName}`;
            condition.textContent = `Currently: ${jsObject.weather[0].main}`;
            temp.textContent = `Current: ${jsObject.main.temp} °F`;
            high.textContent = `High: ${jsObject.main.temp_max} °F`;
            humidity.textContent = `Humidity: ${jsObject.main.humidity}%`;
            speed.textContent = `Wind Speed: ${jsObject.wind.speed} mph`;

            switch (jsObject.weather[0].main) {
                case 'Clear':
                    document.body.style.backgroundImage = 'url("clear.jpg")';
                    break;
                case 'Clouds':
                    document.body.style.backgroundImage = 'url("clouds.jpg")';
                    break;
                case 'Rain':
                case 'Drizzle':
                case 'Mist':
                    document.body.style.backgroundImage = 'url("rain.jpg")';
                    break;
                case 'Thunderstorm':
                    document.body.style.backgroundImage = 'url("storm.jpg")';
                    break;
                case 'Snow':
                    document.body.style.backgroundImage = 'url("snow.jpg")';
                    break;
                default:
                    break;
            }

        });

    let city = document.getElementById("searchInput").value;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=195414e543ad58fb7aea951c77ee178a&units=imperial`;

    fetch(forecast)
        .then((response) => response.json())
        .then((jsObject) => {
            //console.table(jsObject);

            const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

            //console.log(fivedayforecast);

            const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

            let day = 0;
            fivedayforecast.forEach(forecast => {
                let d = new Date(forecast.dt_txt);
                document.getElementById(`forecast${day + 1}`).textContent = `${forecast.main.temp} °F`;
                document.getElementById(`dayofweek${day + 1}`).textContent = weekdays[d.getDay()];
                const imagesrc = 'https://openweathermap.org/img/wn/' + forecast.weather[0].icon + '.png';
                const desc = forecast.weather[0].description;
                document.getElementById(`icon${day + 1}`).setAttribute('src', imagesrc);
                document.getElementById(`icon${day + 1}`).setAttribute('alt', desc);
                day++;

            });
            document.querySelector('.grid-container').style.backgroundColor = "#bf9cac";
        });
}

document.getElementById('searchBtn').addEventListener('click', () => {
    let cityName = document.getElementById("searchInput").value;
    if (cityName)
        searchWeather(cityName);
})