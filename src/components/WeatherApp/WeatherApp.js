import { useEffect, useState } from 'react';
import clear_icon from '../assets/imgs/clear.png';
import cloud_icon from '../assets/imgs/cloud.png';
import drizzle_icon from '../assets/imgs/drizzle.png';
import humiditiy_icon from '../assets/imgs/humidity.png';
import feeling_icon from '../assets/imgs/person.svg';
import rain_icon from '../assets/imgs/rain.png';
import search_icon from '../assets/imgs/search.png';
import snow_icon from '../assets/imgs/snow.png';
import wind_icon from '../assets/imgs/wind.png';
import './WeatherApp.css';

function WeatherApp() {
  let today = new Date();
  let tomorrow = today.getTime() + 1000 * 60 * 60 * 24;
  let date = new Date(tomorrow);
  let tomorrow2 = date.getTime() + 1000 * 60 * 60 * 24;
  let date2 = new Date(tomorrow2);
  let tomorrow3 = date2.getTime() + 1000 * 60 * 60 * 24;
  let date3 = new Date(tomorrow3);
  
  const day1 = date.getMonth() + 1 + '/' + date.getDate()
  const day2 = date2.getMonth() + 1 + '/' + date2.getDate()
  const day3 = date3.getMonth() + 1 + '/' + date3.getDate()

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const detectKeyDown = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  }

  let api_key = '8272a952bb70515534a7ccc74caf1046';
  const [wicon, setWicon] = useState(cloud_icon);
  const [wicon2, setWicon2] = useState(cloud_icon);
  const [wicon3, setWicon3] = useState(cloud_icon);
  const [wicon4, setWicon4] = useState(cloud_icon);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if ( element[0].value === '' ){
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${element[0].value}&units=Metric&appid=${api_key}`;
    
    let response = await fetch(url);
    let data = await response.json();
    
    const humidity = document.getElementsByClassName('humidity-percent');
    const feeling = document.getElementsByClassName('feeling');
    const wind = document.getElementsByClassName('wind-speed');
    const temperature = document.getElementsByClassName('weather-temp');
    const location = document.getElementsByClassName('weather-location');

    humidity[0].innerHTML = data.list[0].main.humidity + '%';
    feeling[0].innerHTML =  Math.floor(data.list[0].main.feels_like) + '°C';
    wind[0].innerHTML = Math.floor(data.list[0].wind.speed) + ' Km/h';
    temperature[0].innerHTML = Math.floor(data.list[0].main.temp) + '°C';
    location[0].innerHTML = data.city.name;

    if ( data.list[0].weather[0].icon ==="01d" || data.list[0].weather[0].icon === "01n"){
      setWicon(clear_icon);
    } else if ( data.list[0].weather[0].icon === "02d" || data.list[0].weather[0].icon === "02n"){
      setWicon(cloud_icon);
    } else if ( data.list[0].weather[0].icon === "03d" || data.list[0].weather[0].icon === "03n"){
      setWicon(drizzle_icon);
    } else if ( data.list[0].weather[0].icon === "04d" || data.list[0].weather[0].icon === "04n"){
      setWicon(drizzle_icon);
    } else if ( data.list[0].weather[0].icon === "13d" || data.list[0].weather[0].icon === "13n"){
      setWicon(snow_icon);
    } else if ( data.list[0].weather[0].icon === "10d" || data.list[0].weather[0].icon === "10n"){
      setWicon(rain_icon);
    } else {
      setWicon(clear_icon);
    }

    if ( data.list[8].weather[0].icon ==="01d" || data.list[8].weather[0].icon === "01n"){
      setWicon2(clear_icon);
    } else if ( data.list[8].weather[0].icon === "02d" || data.list[8].weather[0].icon === "02n"){
      setWicon2(cloud_icon);
    } else if ( data.list[8].weather[0].icon === "03d" || data.list[8].weather[0].icon === "03n"){
      setWicon2(drizzle_icon);
    } else if ( data.list[8].weather[0].icon === "04d" || data.list[8].weather[0].icon === "04n"){
      setWicon2(drizzle_icon);
    } else if ( data.list[8].weather[0].icon === "13d" || data.list[8].weather[0].icon === "13n"){
      setWicon2(snow_icon);
    } else if ( data.list[8].weather[0].icon === "10d" || data.list[8].weather[0].icon === "10n"){
      setWicon2(rain_icon);
    } else {
      setWicon2(clear_icon);
    }
    
    if ( data.list[16].weather[0].icon ==="01d" || data.list[16].weather[0].icon === "01n"){
      setWicon3(clear_icon);
    } else if ( data.list[16].weather[0].icon === "02d" || data.list[16].weather[0].icon === "02n"){
      setWicon3(cloud_icon);
    } else if ( data.list[16].weather[0].icon === "03d" || data.list[16].weather[0].icon === "03n"){
      setWicon3(drizzle_icon);
    } else if ( data.list[16].weather[0].icon === "04d" || data.list[16].weather[0].icon === "04n"){
      setWicon3(drizzle_icon);
    } else if ( data.list[16].weather[0].icon === "13d" || data.list[16].weather[0].icon === "13n"){
      setWicon3(snow_icon);
    } else if ( data.list[16].weather[0].icon === "10d" || data.list[16].weather[0].icon === "10n"){
      setWicon3(rain_icon);
    } else {
      setWicon3(clear_icon);
    }

    if ( data.list[24].weather[0].icon ==="01d" || data.list[24].weather[0].icon === "01n"){
      setWicon4(clear_icon);
    } else if ( data.list[24].weather[0].icon === "02d" || data.list[24].weather[0].icon === "02n"){
      setWicon4(cloud_icon);
    } else if ( data.list[24].weather[0].icon === "03d" || data.list[24].weather[0].icon === "03n"){
      setWicon4(drizzle_icon);
    } else if ( data.list[24].weather[0].icon === "04d" || data.list[24].weather[0].icon === "04n"){
      setWicon4(drizzle_icon);
    } else if ( data.list[24].weather[0].icon === "13d" || data.list[24].weather[0].icon === "13n"){
      setWicon4(snow_icon);
    } else if ( data.list[24].weather[0].icon === "10d" || data.list[24].weather[0].icon === "10n"){
      setWicon4(rain_icon);
    } else {
      setWicon4(clear_icon);
    }
  }

  return (
    <div className='mobile-dimen'>
      <div className='search-field'>
        <input type="text" placeholder='Search a city' className='cityInput'/>
        <div className='button-search' onClick={() =>{search()}}>
          <img src={search_icon} alt="icon-search" />
        </div>
      </div>
      <h1 className='weather-location'>London</h1>
      <div className='main-app'>
        <img src={wicon} alt="icon-weather" />
        <h1 className="weather-temp">10ºC</h1>
      </div>
      <div className='extra-info'>
        <div className='info'>
          <img src={humiditiy_icon} alt="" />
          <p>Humidity</p>
          <p className='humidity-percent'>10%</p>
        </div>
        <div className='info'>
          <img src={wind_icon} alt="" />
          <p>Wind</p>
          <p className='wind-speed'>10%</p>
        </div>
        <div className='info'>
          <img src={feeling_icon} alt="" />
          <p>Real Feel</p>
          <p className='feeling'>10%</p>
        </div>
      </div>
      <div className='days-change'>
        <div className='day'>
          <p>Today</p>
          <img src={wicon} alt="" />
        </div>
        <div className='day'>
          <p>{day1}</p>
          <img src={wicon2} alt="" />
        </div>
        <div className='day'>
          <p>{day2}</p>
          <img src={wicon3} alt="" />
        </div>
        <div className='day'>
          <p>{day3}</p>
          <img src={wicon4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
