var xhr = new XMLHttpRequest();

xhr.open('GET','data.json',true);
xhr.responseType = 'text';
xhr.onload = function()
{
	if(xhr.status === 200)
	{
		weatherInfo = JSON.parse(xhr.responseText);
		 console.log(weatherInfo);
       console.log(weatherInfo.list[0].dt); 
		 display(0);
	}
}
xhr.send();

function display(x)
{ 
   document.getElementById('cityName').innerHTML = '<b>' + 'City: ' + '</b>' + weatherInfo.city.name; 	
   document.getElementById('country').innerHTML = '<b>' + 'Country: ' + '</b>' + weatherInfo.city.country;

   document.getElementById('Longitude').innerHTML = '<b>' + 'Longitude: ' + '</b>' + weatherInfo.city.coord.lon;
   document.getElementById('Latitude').innerHTML = '<b>' +'Latitude: ' + '</b>' + weatherInfo.city.coord.lat;


   document.getElementById('date').innerHTML = '<b>' + 'Date: ' + '</b>' + new Date(weatherInfo.list[x].dt);

   document.getElementById('day').innerHTML = '<b>' + 'Day: ' + '</b>' + weatherInfo.list[x].temp.day;
   document.getElementById('min').innerHTML = '<b>' + 'Min: ' + '</b>' + weatherInfo.list[x].temp.min;
   document.getElementById('max').innerHTML = '<b>' + 'Max: ' + '</b>' + weatherInfo.list[x].temp.max;
   document.getElementById('night').innerHTML = '<b>' + 'Night: ' + '</b>' + weatherInfo.list[x].temp.night;
   document.getElementById('eve').innerHTML = '<b>' + 'Evening: ' + '</b>' + weatherInfo.list[x].temp.eve;
   document.getElementById('morn').innerHTML = '<b>' + 'Morning: ' + '</b>' + weatherInfo.list[x].temp.morn;

   document.getElementById('pressure').innerHTML = '<b>' + 'Pressure: ' + '</b>' + weatherInfo.list[x].pressure;
   document.getElementById('Humidity').innerHTML = '<b>' + 'Humidity: ' + '</b>' + weatherInfo.list[x].humidity;

   document.getElementById('weatherMain').innerHTML = '<b>' + 'Main: ' + '</b>' + weatherInfo.list[x].weather[0].main;
   document.getElementById('weatherDesc').innerHTML = '<b>' + 'Description: ' + '</b>' + weatherInfo.list[x].weather[0].description;

   document.getElementById('speed').innerHTML = '<b>' + 'Speed: ' + '</b>' + weatherInfo.list[x].speed;
   document.getElementById('clouds').innerHTML = '<b>' + 'Clouds: ' + '</b>' + weatherInfo.list[x].clouds;
   document.getElementById('rain').innerHTML = '<b>' + 'Rain: ' + '</b>' + weatherInfo.list[x].rain;




}