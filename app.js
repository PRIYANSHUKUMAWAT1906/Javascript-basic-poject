const temprature=document.getElementById('temperature');
const humidity=document.getElementById('humidity');
const condition=document.getElementById('condition');
const wind=document.getElementById("wind");
const Apikey="6c8003a9fab3415f977192356260502";
const cityName=document.getElementById("cityName");
const cityinput=document.getElementById("cityInput");
const btn=document.getElementById("searchBtn");
const message=document.querySelector(".message");

function clearWeather(){
  cityName.textContent = "";
  temprature.textContent = "";
  condition.textContent = "";
  humidity.textContent = "";
  wind.textContent = "";
}
btn.addEventListener("click",async() =>{
const city=cityinput.value.trim();
if(!city){
message.textContent="Please write a correct city name";
clearWeather(); 
return;
}
message.textContent="loading";

try{
const Api=`https://api.weatherapi.com/v1/current.json?key=${Apikey}&q=${city}`;
const er= await fetch(Api);
if(!er.ok){ 
    throw new Error("city is not laoding");  
}
const data =await er.json();
message.textContent="";
cityName.textContent=`${data.location.name},${data.location.country}`;
temprature.textContent=` temp:${data.current.temp_c}`;
condition.textContent = `humi:${data.current.condition.text}`;
  humidity.textContent = `temp:${data.current.humidity}`;
  wind.textContent = `wind:${data.current.wind_kph}`;
  
}


catch (error) {
    message.textContent = "City not found or network error";
    clearWeather();
  }

}
)

