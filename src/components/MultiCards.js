import { useState } from "react";
import ApiKey from "./ApiKey";
import { Container, Row, Col } from "react-bootstrap";
import { userCity } from "./WeatherApi";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/styles/MultiCards.css'
import '../components/styles/MultiCards.css'

function MultiCards(props) {
  const icon = props.icon;
  const day = props.day;
  const high = props.high;
  const low = props.low;
  const weatherIcon = `http://openweathermap.org/img/wn/`;

  return (
        <Col className="cardBoxes">
        <p>{props.day}</p>
        <img className="multiIcon" src={weatherIcon + props.icon + '.png'} />
        <p className="fontSize">{props.low}</p>
        <p className="lowFontSize">L: {props.high}</p>
        </Col>
  );

}

export default MultiCards;