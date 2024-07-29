import React, { useState } from 'react';
import axios from 'axios';
import pic from './images/purple-sky.jpg'
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './Weather.css'; // Assuming Weather.css file for custom styles
 
export default function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const [cloudsData, setCloudsData] = useState({});
  const [sysData, setSysData] = useState({});
  const [windData, setWindData] = useState({});
  const [weatherDesc, setWeatherDesc] = useState([]);
  const [location, setLocation] = useState('');
 
  const updateWeather = () => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=11c15604a23bd024c1c83c12bf0a9e6f`)
      .then((res) => {
        setWeatherData(res.data.main);
        setCloudsData(res.data.clouds);
        setSysData(res.data.sys);
        setWindData(res.data.wind);
        setWeatherDesc(res.data.weather);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        alert('Error fetching data. Please try again.');
      });
  };
 
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
 
  const weatherIconUrl = `http://openweathermap.org/img/w/${weatherDesc.length > 0 ? weatherDesc[0].icon : ''}.png`;
 
  return (
    <body id='BA'>
    <div className="container-fluid" id="main">
      <div className="row">
        <div className="col-md-4 p-3 header" style={{ backgroundImage: `url('./images/weather-background.jpg')`, backgroundSize: 'cover' }}>
          <h1 className="text-white" id='DC'>Weather Forecast</h1>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4 p-3 header" id='BU'>
          <h5 id='G'>{formatDate(sysData.sunrise)}</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <input type="text" className="form-control" placeholder="Enter city name" onChange={(e) => setLocation(e.target.value)} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <button className="btn btn-primary" onClick={updateWeather}>Get Weather</button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <h4 className="text-center">Current Weather</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="weather-card">
            <h5 id='G'>{sysData.name}, {sysData.country}</h5>
            <img src={weatherIconUrl} alt="Weather Icon" />
            <h5 id='G'>{formatDate(sysData.sunset)}</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="weather-card">
            <h5 id='G'>Temperature <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-thermometer-high" viewBox="0 0 16 16">
  <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415"/>
  <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1"/>
</svg></h5>
            <h5 id='G'>{Math.round(weatherData.temp - 273.15)} <sup>o</sup>C</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="weather-card">
            <h4 id='QQ'>Description</h4>
            {weatherDesc.map((x, index) => (
              <div key={index}>
                <h5 id='G'>{x.description}</h5>
                <img src={weatherIconUrl} alt="Weather Icon" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Line between Current Weather and All Conditions */}
      <div className="row">
        <div className="col-md-12">
          <hr className="line" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <h4 className="text-center">All Conditions</h4>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-3">
          <div className="weather-card">
            <h5 id='G'>Temperature <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-thermometer-high" viewBox="0 0 16 16">
  <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415"/>
  <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1"/>
</svg></h5>
            <h5 id='G'>{Math.round(weatherData.temp - 273.15)} <sup>o</sup>C</h5>
          </div>
        </div>
        <div className="col-md-3">
          <div className="weather-card">
            <h5 id='G'>Wind Speed <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
  <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/>
</svg></h5>
            <h5 id='G'>{windData.speed} m/s</h5>
          </div>
        </div>
        <div className="col-md-3">
          <div className="weather-card">
            <h5 id='G'>Cloudiness <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cloud-fill" viewBox="0 0 16 16">
  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383"/>
</svg></h5>
            <h5 id='G'>{cloudsData.all} %</h5>
          </div>
        </div>
        <div className="col-md-3">
          <div className="weather-card">
            <h5 id='G'>Humidity <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-moisture" viewBox="0 0 16 16">
  <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a29 29 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a29 29 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001zm0 0-.364-.343zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267"/>
</svg></h5>
            <h5 id='G'>{weatherData.humidity} %</h5>
          </div>
        </div>
      </div>
    </div>
    </body>
  );
}