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

function daysForward(day){
  const toDay = 1000 * 60 * 60 * 24;

  let today = new Date();
  let tomorrow = today.getTime() + toDay;
  const date = new Date(tomorrow);
  let tomorrow2 = date.getTime() + toDay;
  const date2 = new Date(tomorrow2);
  let tomorrow3 = date2.getTime() + toDay;
  const date3 = new Date(tomorrow3);

  const day1 = date.getMonth() + 1 + '/' + date.getDate()
  const day2 = date2.getMonth() + 1 + '/' + date2.getDate()
  const day3 = date3.getMonth() + 1 + '/' + date3.getDate()

  return  day === 'day1' ? day1 : day === 'day2' ? day2 : day === 'day3' ? day3 : null;
}

function WeatherApp() {
  const api_key = '8272a952bb70515534a7ccc74caf1046';
  const [wicon, setWicon] = useState(cloud_icon);
  const [wicon2, setWicon2] = useState(cloud_icon);
  const [wicon3, setWicon3] = useState(cloud_icon);
  const [wicon4, setWicon4] = useState(cloud_icon);

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)
  }, )

  const detectKeyDown = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  }
  
  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if ( element[0].value === '' ){
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${element[0].value}&units=Metric&appid=${api_key}`;
    
    let response = await fetch(url);
    let data = await response.json();
    const arrayIconsD = ["01d", "02d", "03d",  "04d", "10d",  "13d"];
    const arrayIconsN = ["01n", "02n", "03n", "04n", "10n", "13n",];
    
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

    for (let i = 0; i <= 24; i += 8) {
      switch ( i ) {
        case 0:
          switch ( data.list[i].weather[0].icon ) {
            case arrayIconsD[0] || arrayIconsN[0]:
              setWicon(clear_icon);
              break;
            case arrayIconsD[1] || arrayIconsN[1]:
              setWicon(cloud_icon);
              break;
            case arrayIconsD[2] || arrayIconsN[2]:
              setWicon(drizzle_icon);
              break;
            case arrayIconsD[3] || arrayIconsN[3]:
              setWicon(drizzle_icon);
              break;
            case arrayIconsD[4] || arrayIconsN[4]:
              setWicon(rain_icon);
              break;
            case arrayIconsD[5] || arrayIconsN[5]:
              setWicon(snow_icon);
              break;
            default:
              setWicon(clear_icon);
              break;
          }
          break;
        case 8:
          switch ( data.list[i].weather[0].icon ) {
            case arrayIconsD[0] || arrayIconsN[0]:
              setWicon2(clear_icon);
              break;
            case arrayIconsD[1] || arrayIconsN[1]:
              setWicon2(cloud_icon);
              break;
            case arrayIconsD[2] || arrayIconsN[2]:
              setWicon2(drizzle_icon);
              break;
            case arrayIconsD[3] || arrayIconsN[3]:
              setWicon2(drizzle_icon);
              break;
            case arrayIconsD[4] || arrayIconsN[4]:
              setWicon2(rain_icon);
              break;
            case arrayIconsD[5] || arrayIconsN[5]:
              setWicon2(snow_icon);
              break;
            default:
              setWicon2(clear_icon);
              break;
          }
          break;
        case 16:
          switch ( data.list[i].weather[0].icon ) {
            case arrayIconsD[0] || arrayIconsN[0]:
              setWicon3(clear_icon);
              break;
            case arrayIconsD[1] || arrayIconsN[1]:
              setWicon3(cloud_icon);
              break;
            case arrayIconsD[2] || arrayIconsN[2]:
              setWicon3(drizzle_icon);
              break;
            case arrayIconsD[3] || arrayIconsN[3]:
              setWicon3(drizzle_icon);
              break;
            case arrayIconsD[4] || arrayIconsN[4]:
              setWicon3(rain_icon);
              break;
            case arrayIconsD[5] || arrayIconsN[5]:
              setWicon3(snow_icon);
              break;
            default:
              setWicon3(clear_icon);
              break;
          }
          break;
        case 24:
          switch ( data.list[i].weather[0].icon ) {
            case arrayIconsD[0] || arrayIconsN[0]:
              setWicon4(clear_icon);
              break;
            case arrayIconsD[1] || arrayIconsN[1]:
              setWicon4(cloud_icon);
              break;
            case arrayIconsD[2] || arrayIconsN[2]:
              setWicon4(drizzle_icon);
              break;
            case arrayIconsD[3] || arrayIconsN[3]:
              setWicon4(drizzle_icon);
              break;
            case arrayIconsD[4] || arrayIconsN[4]:
              setWicon4(rain_icon);
              break;
            case arrayIconsD[5] || arrayIconsN[5]:
              setWicon4(snow_icon);
              break;
            default:
              setWicon4(clear_icon);
              break;
          }
          break;
        default:
          setWicon(clear_icon);
          break;
      }
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
      <h1 className='weather-location'>Belo Horizonte</h1>
      <div className='main-app'>
        <img src={wicon} alt="icon-weather" />
        <h1 className="weather-temp">20ºC</h1>
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
          <p className='wind-speed'>2 Km/h</p>
        </div>
        <div className='info'>
          <img src={feeling_icon} alt="" />
          <p>Real Feel</p>
          <p className='feeling'>22ºC</p>
        </div>
      </div>
      <div className='days-change'>
        <div className='day'>
          <p>Today</p>
          <img src={wicon} alt="" />
        </div>
        <div className='day'>
          <p>{daysForward('day1')}</p>
          <img src={wicon2} alt="" />
        </div>
        <div className='day'>
          <p>{daysForward('day2')}</p>
          <img src={wicon3} alt="" />
        </div>
        <div className='day'>
          <p>{daysForward('day3')}</p>
          <img src={wicon4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
