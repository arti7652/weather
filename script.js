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
    .then(response => {

        console.log(response)
        // temps.innerHtml = temps.peraturs
        // temp2.innerHtml = temp2.peraturs
        Cloud_pct.innerHTML = response.cloud_pct
        Feels_like.innerHTML = response.feels_like
        Humidity.innerHTML = response.humidity
        Humidity2.innerHTML = response.humidity
        Max_temp.innerHTML = response.max_temp
        Min_temp.innerHTML = response.min_temp
        Sunrise.innerHTML = response.sunrise
        Sunset.innerHTML = response.sunset
        Wind_degrees.innerHTML = response.wind_degrees
        Wind_speed.innerHTML = response.wind_speed
        Wind_speed2.innerHTML = response.wind_speed
        document.getElementById('Tempp').innerHTML = response.temp
        document.getElementById('Tempp2').innerHTML = response.temp


    })
    .catch(err => console.log(err) 
        
    );
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
getWeather(city.value)




})

getWeather("Delhi")
