import React, { useEffect, useState } from "react";
import FullApp from "./FullApp";
import { Container, Row, Col, Button } from "react-bootstrap";
import StarOutline from "../assets/images/StarOutline.png";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomSection from "./BottomSection";
import ApiKey from "./ApiKey";
import MultiDay from "../assets/services/MultiDay";


function WeatherApi() {
  const [ weather, setWeather ] = useState(null);
  const [ userCity, setUserCity] = useState('');
  const [ currentWeather, setCurrentWeather] = useState();
  const [ high, sethigh ] = useState('');
  const [ low, setLow ] = useState('');
  const [ icon, setIcon ]= useState('');
  const [ description, setDescription ] = useState('');

  const weatherIcon = `http://openweathermap.org/img/wn/${icon}.png`

  async function fetchData() {
    
    const response = await fetch (
      `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=imperial&appid=${ApiKey}`
    );
    const data = await response.json();
    setWeather(data);
    console.log(data);

    setCurrentWeather(data.main.feels_like);
    setIcon(data.weather[0].icon)
    sethigh(data.main.temp_max)
    setLow(data.main.temp_min)
    setDescription(data.weather[0].description)
    console.log(data.weather[0].icon);
  }

  const handleClick = () => {
    fetchData(userCity);
    MultiDay();
  };

  useEffect(() => {
    fetchData(userCity);
  }, []);

  if (weather) {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <input
                id=""
                type="text"
                name="city"
                value={userCity}
                onChange={(event) => {
                setUserCity(event.target.value);
                }}
                placeholder="Enter a city"
              />
              <Button onClick={handleClick}>Submit</Button>
              <Button>Favorites</Button>
            </Col>
          </Row>
        </Container>

        <Container className="text-center">
          <Row>
            <Col>
              <img src={StarOutline}></img>
            </Col>
            <Col>
            <Col className="d-flex">
            <img src={weatherIcon}></img>
              <p>{currentWeather} &deg;F</p>
              </Col>
              <p>{weather.name}</p>
              <p>{description}</p>
            </Col>
            <Col>
              <Col>
              <p>High</p>
              <p>{high}</p></Col>
            </Col>
            <Col>
              <Col>
              <p>Low</p>
              <p>{low}</p>
              </Col>
           
            </Col>
          </Row>
        </Container>

        <Container>
            <Row>
                <Col>
                <BottomSection 
                dayName={weather.name}
                image={weatherIcon}
                temp={currentWeather}
                // // lowTemp= 
                // 
                />
                </Col>

            </Row>
            

        </Container>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default WeatherApi;
