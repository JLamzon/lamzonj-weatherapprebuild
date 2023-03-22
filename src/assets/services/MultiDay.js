import { useState } from "react";
import ApiKey from "../../components/ApiKey"
import userCity from '../../components/WeatherApi'


  async function MultiDay() {

    const response = await fetch (
      `https://api.openweathermap.org/data/2.5/forecast?q=${userCity}&units=imperial&appid=${ApiKey}`
    );
    const data = await response.json();
    console.log(data)

    return data;
    }
  
export default MultiDay;