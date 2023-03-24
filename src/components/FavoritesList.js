import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../components/styles/FavoritesListStyle.css'
import ApiKey from './ApiKey';
import FavoritesPage from './FavoritesPage';
import LocalStorage from './LocalStorage';


// function FavoritesList(){

//     const [ allData, setAllData ] = useState('');
//     const [ firstCity, getFirstCity ] = useState('');
//     const [ secondCity, getSecondCity ]  = useState('');
//     const [ thirdCity, getThirdCity ] = useState('');
//     const [ fourthCity, getFourthCity ] = useState('');
//     const [ fifthCity, getFifthCity ] = useState('');å
//     const [sixthCity, getSixthCity ] = useState('');


//     const localStorageData = LocalStorage();
    
//     async function getData(){
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localStorageData[0]}&units=imperial&appid=${ApiKey}`)
//         const data = await response.json();
//         setAllData(data);
//         getFirstCity(localStorageData[0]);
//     }

//     useEffect(() => {
//         getData();
//     }, []);

//     return (
// <Container>
//     <Row>
//         <FavoritesPage
//         currentTemp = {allData.main.feels_like}
//         city = {localStorageData[0]}
//         // description = {} 
//         />
//     </Row>
// </Container>
        
//     )

// }


function FavoritesList() {

  
  const [ allData, setAllData ] = useState('');
  const [ firstCity, getFirstCity ] = useState('');
  const [ secondCity, getSecondCity ]  = useState('');
  const [ thirdCity, getThirdCity ] = useState('');
  const [ fourthCity, getFourthCity ] = useState('');
  const [ fifthCity, getFifthCity ] = useState('');
  const [sixthCity, getSixthCity ] = useState('');

  const [weather, setWeather] = useState(null);
  const [currentWeather, setCurrentWeather] = useState();
  const [high, setHigh] = useState("");
  const [low, setLow] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");



  const localStorageData = LocalStorage();

  async function getData(){

    if (localStorage)
{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localStorageData[0]}&units=imperial&appid=${ApiKey}`)
    const data = await response.json();
    setAllData(data);
    getFirstCity(localStorageData[0]);
    setWeather(data);
    setCurrentWeather(Math.floor(data.main.feels_like));
    setIcon(data.weather[0].icon);
    setHigh(Math.floor(data.main.temp_max));
    setLow(Math.floor(data.main.temp_min));
    setDescription(data.weather[0].description);
}
else {
<h1>Nothing here</h1>
}


  }

  async function getData(){
    if (localStorageData === [])
    {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localStorageData[1]}&units=imperial&appid=${ApiKey}`)
        const data = await response.json();
        setAllData(data);
        getFirstCity(localStorageData[0]);
        setWeather(data);
        setCurrentWeather(Math.floor(data.main.feels_like));
        setIcon(data.weather[0].icon);
        setHigh(Math.floor(data.main.temp_max));
        setLow(Math.floor(data.main.temp_min));
        setDescription(data.weather[0].description);
    }
}


  useEffect(() => {
      getData();
  }, []);

  if(allData){
    return (
        <Container>
          <Row className="favoritesCards">
            {allData && (
                <>
                 <FavoritesPage
                icon = {`http://openweathermap.org/img/wn/${icon}.png`}
                currentTemp={allData.main.feels_like}
                city={localStorageData[0]}
                // description = {} 
              />
                           <FavoritesPage
                icon = {`http://openweathermap.org/img/wn/${icon}.png`}
                currentTemp={allData.main.feels_like}
                city={localStorageData[1]}
                // description = {} 
              />
                           <FavoritesPage
                icon = {`http://openweathermap.org/img/wn/${icon}.png`}
                currentTemp={allData.main.feels_like}
                city={localStorageData[2]}
                // description = {} 
              />
                                     <FavoritesPage
                icon = {`http://openweathermap.org/img/wn/${icon}.png`}
                currentTemp={allData.main.feels_like}
                city={localStorageData[2]}
                // description = {} 
              />
                                     <FavoritesPage
                icon = {`http://openweathermap.org/img/wn/${icon}.png`}
                currentTemp={allData.main.feels_like}
                city={localStorageData[2]}
                // description = {} 
              />
                                     <FavoritesPage
                icon = {`http://openweathermap.org/img/wn/${icon}.png`}
                currentTemp={allData.main.feels_like}
                city={localStorageData[2]}
                // description = {} 
              />
                </>
    
              
            )}
          </Row>
        </Container>
    )
  }
  else{
    <h1>Loading</h1>
  }
}


export default FavoritesList;
