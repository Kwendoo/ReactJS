import PropTypes from 'prop-types';



const WeatherDisplay = (props) => {

    const {city, country, temp, tempMin, tempMax, description} = props;

    return(
        <div>
            <h4>{city} ({country})</h4>
            <p>Température : {temp}°C</p>
            {tempMin && (
                <p>Minima : {tempMin}°C</p>
            )}
            {tempMax && (
                <p>Maxima : {tempMax}°C</p>
            )}
            <p>Le temps est {description}.</p>
        </div>
    )

}

WeatherDisplay.propTypes = {
    city : PropTypes.string.isRequired,
    country : PropTypes.string.isRequired,
    temp : PropTypes.number.isRequired,
    tempMin : PropTypes.number,
    tempMax : PropTypes.number,
    description : PropTypes.string.isRequired
}

export default WeatherDisplay;