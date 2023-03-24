import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import StarOutline from "../assets/images/StarOutline.png";
import "bootstrap/dist/css/bootstrap.min.css";
import ApiKey from "./ApiKey";
// import MultiDay from "./MultiDay";
import MultiCards from "./MultiCards";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/WeatherApi.css";
import iconSearch from "../assets/images/IconSearch.png";
import FaveButton from "../assets/images/FaveButton.png";
// import { BrowserRouter, Router, Routes } from "react-router-dom";
import FavoritesList from "./FavoritesList";
import LocalStorage from "./LocalStorage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FavePageButton from "./FavePageButton";
import FavoritesPage from "./FavoritesPage";


function WeatherApi() {
  const [weather, setWeather] = useState(null);
  const [userCity, setUserCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState();
  const [high, setHigh] = useState("");
  const [low, setLow] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");
  const [highOne, setHighOne] = useState();
  const [lowOne, setLowOne] = useState();
  const [highTwo, setHighTwo] = useState("");
  const [lowTwo, setLowTwo] = useState("");
  const [highThree, setHighThree] = useState("");
  const [lowThree, setLowThree] = useState("");
  const [highFour, setHighFour] = useState("");
  const [lowFour, setLowFour] = useState("");
  const [highFive, setHighFive] = useState("");
  const [lowFive, setLowFive] = useState("");
  const [iconOne, setIconOne] = useState();
  const [iconTwo, setIconTwo] = useState("");
  const [iconThree, setIconThree] = useState("");
  const [iconFour, setIconFour] = useState("");
  const [iconFive, setIconFive] = useState("");
  const [dayOne, setDayOne] = useState("");
  const [dayOneHigh, setDayOneHigh] = useState("");
  const [dayOneLow, setDayOneLow] = useState("");
  const [dayTwoHigh, setDayTwoHigh] = useState("");
  const [dayTwoLow, setDayTwoLow] = useState("");
  const [dayThreeHigh, setDayThreeHigh] = useState("");
  const [dayThreeLow, setDayThreeLow] = useState("");
  const [dayFourHigh, setDayFourHigh] = useState("");
  const [dayFourLow, setDayFourLow] = useState("");
  const [dayFiveHigh, setFiveHigh] = useState("");
  const [dayFiveLOw, setFiveLow] = useState("");
  
  const [ firstDayIcon, setFirstDayIcon ] = useState("");
  const [ secondDayIcon, setSecondDayIcon] = useState("");
  const [ thirdDayIcon, setThirdDayIcon] = useState("");
  const [ fourthDayIcon, setFourthDayIcon] = useState("");
  const [ fifthDayIcon, setFifthDayIcon ] = useState("");


  
  const weatherIcon = `http://openweathermap.org/img/wn/${icon}.png`;


  async function fetchData() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=imperial&appid=${ApiKey}`
    );
    const data = await response.json();
    setWeather(data);
    setCurrentWeather(Math.floor(data.main.feels_like));
    setIcon(data.weather[0].icon);
    setHigh(Math.floor(data.main.temp_max));
    setLow(Math.floor(data.main.temp_min));
    setDescription(data.weather[0].description);
    console.log(data.weather[0].icon);


    let dayTwoWeatherHigh = data.list[12].main.temp_max;
    let dayTwoWeatherLow = data.list[8].main.temp_min;
    let dayThreeWeatherHigh = data.list[20].main.temp_max;
    let dayThreeWeatherLow = data.list[16].main.temp_min;
    let dayFourWeatherHigh = data.list[28].main.temp_max;
    let dayFourWeatherLow = data.list[24].main.temp_min;
    let dayFiveWeatherHigh = data.list[36].main.temp_max;
    let dayFiveWeatherLow = data.list[32].main.temp_min;
    let searchedLocation = data.city.name;
    let dayOne = data.list[0].dt;
    let dayTwo = data.list[8].dt;
    let dayThree = data.list[16].dt;
    let dayFour = data.list[24].dt;
    let dayFive = data.list[32].dt;
    firstDayIcon = data.list[4].weather[0].icon;
    secondDayIcon = data.list[12].weather[0].icon;
    thirdDayIcon = data.list[20].weather[0].icon;
    fourthDayIcon = data.list[28].weather[0].icon;
    fifthDayIcon = data.list[36].weather[0].icon;
  }


  async function MultiDayFetch() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${userCity}&units=imperial&appid=${ApiKey}`
    );
    const data = await response.json();
    setHighOne(Math.floor(data.list[4].main.temp_max));
    setLowOne(Math.floor(data.list[0].main.temp_min));
    setHighTwo(Math.floor(data.list[12].main.temp_max));
    setLowTwo(Math.floor(data.list[8].main.temp_min));
    setHighThree(data.list[20].main.temp_max);
    setLowThree(data.list[16].main.temp_min);
    setHighFour(data.list[28].main.temp_max);
    setLowFour(data.list[24].main.temp_min);
    setHighFive(data.list[36].main.temp_max);
    setLowFive(data.list[32].main.temp_min);


    // let dayOne = data.list[0].dt;
    // let dayTwo = data.list[8].dt;
    // let dayThree = data.list[16].dt;
    // let dayFour = data.list[24].dt;
    // let dayFive = data.list[32].dt;

    setIconOne(data.list[4].weather[0].icon);
    setIconTwo(data.list[12].weather[0].icon);
    setIconThree(data.list[20].weather[0].icon);
    setIconFour(data.list[28].weather[0].icon);
    setIconFive(data.list[36].weather[0].icon);
    console.log(data);
  }




  const handleClick = () => {
    fetchData();
    MultiDayFetch();
    
  };


  useEffect(() => {
    fetchData();
    MultiDayFetch();
  }, []);


  const FaveCards = () => {
    console.log(userCity);
    if (userCity) {
      let favorites = LocalStorage();
      favorites.push(userCity);
      localStorage.setItem("Favorites", JSON.stringify(favorites));
      console.log(favorites);
    } else {
      alert("Enter city first");
    }
  };


  if (weather) {
    return (
      <Router >
      <div className="fullPage">
        <Container className="fullContainer">
          <Row>
            <Col className="searchBar">
              <input
                className="input"
                id=""
                type="text"
                name="city"
                value={userCity}
                onChange={(event) => {
                  setUserCity(event.target.value);
                }}
                placeholder="Enter a city"
              />
              <Button
                variant="light"
                className="submitButton"
                onClick={handleClick}>
                <img className="searchIcon" src={iconSearch} />
              </Button>

              <Button
                variant="light"
                to="FavoritesList"
                className="favoritesBtn">
                <img src={FaveButton} />
              </Button>
            </Col>
          </Row>
        </Container>
        <Container className="text-center mt-5">
          <Row>
            <Col md={3}>
              <Button variant="light" className="faveBtn" onClick={FaveCards}>
                <img src={StarOutline}></img>
              </Button>
            </Col>
            <Col md={3} className="currentCard">
              <Col className="d-flex tempAndIcon">
                <img className="currentIcon" src={weatherIcon}></img>
                <p className="currentTemp">{currentWeather}&deg;</p>
              </Col>
              <p className="fontSize">{weather.name}</p>
              <p className="weatherDescription">{description}</p>
            </Col>
            <Col>
              <Col>
                <p className="lowFontSize">High</p>
                <p className="fontSize">{high}</p>
              </Col>
            </Col>
            <Col>
              <Col>
                <p className="lowFontSize">Low</p>
                <p className="fontSize">{low}</p>
              </Col>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="bottomCards">
            <MultiCards icon={iconOne} high={highOne} low={lowOne} />
            <MultiCards icon={iconTwo} high={highTwo} low={lowTwo} />
            <MultiCards icon={iconThree} high={highThree} low={lowThree} />
            <MultiCards icon={iconFour} high={highFour} low={lowFour} />
            <MultiCards icon={iconFive} high={highFive} low={lowFive} />
          </Row>
        </Container>
       <Container>
        <Row>
          <Col>
          <FavoritesList />
          </Col>
        </Row>
       </Container>
      </div>
      <Routes>
        <Route path="./FavoritesPage" element={<FavoritesPage />}></Route>
      </Routes>
      </ Router>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default WeatherApi;
