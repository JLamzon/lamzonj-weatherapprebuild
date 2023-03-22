


const BottomSection = (props) => {

    const dayName = props.dayName;
    const image = props.image;
    const clouds = props.clouds;
    const temp = props.temp;
    const lowTemp = props.lowTemp;

    return ( 
        <div className="bottomSection">
                <p>{props.dayName}</p>
                <img src={props.image}></img>
                <p>{props.temp}</p>
                <p>{props.lowTemp}</p>
        </div>

    )
}

export default BottomSection;