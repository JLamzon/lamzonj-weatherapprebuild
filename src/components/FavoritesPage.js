import { Container, Row, Col, Button } from "react-bootstrap";
import FavoritesList from "./FavoritesList";
import '../components/styles/FavoritesPage.css'

function FavoritesPage(props){
    return (
            <Col className="favoritesCard">
            <Col>            
            <img src={props.icon}/>
            <p>{props.currentTemp}&deg;</p>
            </Col>

            <p>{props.city}</p>
            <p>{props.description}</p>
            <Button className="btn">Delete</Button>
            </Col>
    )
    
}

export default FavoritesPage;