/*-----------------------Weather Summary------------------------------------------*/
const weatherSummary = `https://api.openweathermap.org/data/2.5/weather?q=monterrey&appid=195414e543ad58fb7aea951c77ee178a&units=imperial`;
fetch(weatherSummary)
    .then((response) => response.json())
    .then((jsObject) => {


        const condition = document.querySelector('#condition');
        const temp = document.querySelector('#temp');
        const high = document.querySelector('#high');
        const humidity = document.querySelector('#humidity');
        const speed = document.querySelector('#speed');

        condition.textContent = `${jsObject.weather[0].main}`;
        temp.textContent = `${jsObject.main.temp} °F`;
        high.textContent = `${jsObject.main.temp_max} °F`;
        humidity.textContent = `${jsObject.main.humidity}%`;
        speed.textContent = `${jsObject.wind.speed} mph`;

    });