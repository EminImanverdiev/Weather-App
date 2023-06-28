const apiKey='86bf0d706fb66726bd8086a9f70e0359';
const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchbox=document.querySelector('.search input')
const searchbtn=document.querySelector('.search img')
const weatherIcon=document.querySelector('.weather-icon');
async function CheckWeather(city){
  const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
  var data=await response.json(); 
  document.querySelector('.city').innerHTML=data.name;
  document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°C";
  document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
  document.querySelector('.wind').innerHTML=data.wind.speed+"km/h";
  if(data.weather[0].main=="Clouds") {
    weatherIcon.src="imgs/clouds.png"
  }
  else if(data.weather[0].main=="Clear"){
    weatherIcon.src="imgs/clear.png"
  }
  else if(data.weather[0].main=="Rain"){
    weatherIcon.src="imgs/rainy.png"
  }
  else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="imgs/drizzle.jpg"
  }
  else if(data.weather[0].main=="Mist"){
    weatherIcon.src="imgs/mist.png"
  }
}
searchbtn.addEventListener('click',function() {
  CheckWeather(searchbox.value);
  searchbox.value=""
})