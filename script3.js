// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '9eea2559f3msh30f8a71f274264ap11c3d6jsn1eaa8b14c71a',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
       

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9eea2559f3msh30f8a71f274264ap11c3d6jsn1eaa8b14c71a',
		'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com'
	}
};

fetch('https://ski-resort-forecast.p.rapidapi.com/Jackson%20Hole/forecast?units=i&el=top', options)
	.then(response => response.json())
	
	.then(response =>{
		

var day = "";
        response.forecast5Day.forEach(element => {
				console.log(element.dayOfWeek)

				day += '<li>'+element.dayOfWeek+'</li>'

		});

		document.getElementById('mydays').innerHTML = day


	})
	

	



	

	