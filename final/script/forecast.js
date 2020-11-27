/*-----------------------Forecast------------------------------------------*/

const forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=195414e543ad58fb7aea951c77ee178a&units=imperial";

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
    });