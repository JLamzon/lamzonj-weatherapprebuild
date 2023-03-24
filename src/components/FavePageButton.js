import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FavoritesList from "./FavoritesList";

function FavePageButton(props){

    
    return <Link to={FavoritesList}>Favorites</Link>
}


export default FavePageButton;