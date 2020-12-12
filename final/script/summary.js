/*-----------------------Weather Summary------------------------------------------*/
function searchWeather(cityName){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=195414e543ad58fb7aea951c77ee178a&units=imperial`)
    .then((response) => response.json())
    .then((jsObject) => {

        const condition = document.querySelector('#condition');
        const temp = document.querySelector('#temp');
        const high = document.querySelector('#high');
        const humidity = document.querySelector('#humidity');
        const speed = document.querySelector('#speed');
        const nameCity = document.querySelector('#nameCity');

        nameCity.textContent = `${cityName} ☼`;
        condition.textContent = `Currently: ${jsObject.weather[0].main}`;
        temp.textContent = `Current: ${jsObject.main.temp} °F`;
        high.textContent = `High: ${jsObject.main.temp_max} °F`;
        humidity.textContent = `Humidity: ${jsObject.main.humidity}%`;
        speed.textContent = `Wind Speed: ${jsObject.wind.speed} mph`;

    });
}
    document.getElementById('searchBtn').addEventListener('click', () => {
        let cityName = document.getElementById("searchInput").value;
        if(cityName)
            searchWeather(cityName);
    })