const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9eea2559f3msh30f8a71f274264ap11c3d6jsn1eaa8b14c71a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
    CityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response =>{
        console.log(response)
        CLOUD_PCT.innerHTML = response.cloud_pct
        FEELS_LIKE.innerHTML = response.feels_like
        HUMIDITYS.innerHTML = response.humidity
        HUMIDITY.innerHTML = response.humidity
        Humidity2.innerHTML = response.humidity
        MAX_TEMP.innerHTML = response.max_temp
        MIN_TEMP.innerHTML = response.min_temp
        SUNRISE.innerHTML = response.sunrise
        SUNSET.innerHTML = response.sunset
        TEMP.innerHTML = response.temp 
        tempp2.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed2.innerHTML = response.wind_speed
        // Wind_Speed.innerHTML = response.wind_speed
        document.getElementById('Wind_Speed').innerHTML = response. wind_speed
       })
    }

submit.addEventListener('click',(a)=>{
    a.preventDefault()
getWeather(city.value)
})

getWeather('Delhi')








    