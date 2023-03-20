import React, { useEffect, useState } from "react";
import FullApp from "./FullApp";

function WeatherApi(props) {
  const apiKey = "7f9671aa4771ac29caa6697fb2521284";
  const citytest = "manteca"
  const city = props.city;
  const [weather, setWeather] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
      );
      const data = await response.json();
      setWeather(data);
    }
    fetchData();
  }, [city, apiKey]);



  return (
    <div>
      {weather && (
        <div>
          <h2>Current Weather for {weather.name}</h2>
          <p>Temperature: {weather.main.feels_like} &deg;F</p>
          {/* <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} mph</p> */}
        </div>
      )}
    </div>
  );
}

export default WeatherApi;
