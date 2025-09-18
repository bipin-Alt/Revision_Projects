let searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const fetchWeatherData = async (city) => {
    const APIs = {
      BaseURL: "http://api.weatherapi.com/v1",
      APIKey: "81153063a90f4435ad694335251809",
    };
  
    try {
      const response = await fetch(
        `${APIs.BaseURL}/current.json?key=${APIs.APIKey}&q=${city}&aqi=no`
      );
  
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
     
      const data = await response.json();
      console.log(data);
      // UI Update
      document.getElementById("current-temp").textContent = `${data.current.temp_c}°C`;
      document.getElementById("location").textContent = `${data.location.name}, ${data.location.country}`;
      document.getElementById("weather-description").textContent = data.current.condition.text;
      document.getElementById("feels-like").textContent=data.current.feelslike_c;
      document.getElementById("humidity").textContent =`${data.current.humidity}%`
      document.getElementById("wind-speed").textContent=`${data.current.wind_kph} km/h`
      document.getElementById("pressure").textContent=`${data.current.pressure_mb} hpa`
      // Weather icon 
      document.getElementById("weather-icon").innerHTML = `
        <img src="https:${data.current.condition.icon}" alt="${data.current.condition.text}" />
      `;
    } catch (err) {
      console.error("Failed to fetch weather:", err.message);
    }
  };
  
  const fetchFiveDayForecast= async(city) =>{
    //base url and api key for the weather
    const APIs = {
        BaseURL : "http://api.weatherapi.com/v1",
        APIKey:"81153063a90f4435ad694335251809",
    };
    
    try{
        const response = await fetch(`${APIs.BaseURL}/forecast.json?key=${APIs.APIKey}&q=${city}&days=5&aqi=no&alerts=no`); //asynchronous request for the weather data
    
    if(!response.ok){
        throw new Error("Failed to fetch forecast");
    }
    const data = await response.json(); //parsing to the javascript object
    console.log(data);
     //UI Update //    
     const forecastDisplay = document.getElementById("forecast-display");
      forecastDisplay.innerHTML = `<div class="text-blue-100 text-sm mb-2">${data.forecast.forecastday[1].day.date}</div>
      <div class="text-2xl mb-2">${data.forecast.forecastday[1].day.condition.text}</div>
     <div class="text-white text-lg">${data.forecast.forecastday[1].maxtemp_c}°C / ${data.forecast.forecastday[1].day.mintemp_c}°C</div> `
    return data;
    }
    catch(error){
        const errorDisplay = document.getElementById("error-message");
        errorDisplay.style.display= "block";
    }

  }
  //combining both functions
  const getData = async (city)=>{
    const current = await fetchWeatherData(city);
    const forecast= await  fetchFiveDayForecast(city,5);
    return{current, forecast}
  }

// event listener
searchBtn.addEventListener("click", async () => {
  const searchValue = searchInput.value.trim();
  if (searchValue) {
    const weather = await getData(searchValue.toLowerCase());
  }
});
