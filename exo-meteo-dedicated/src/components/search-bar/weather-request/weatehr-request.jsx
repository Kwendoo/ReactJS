import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherDisplay from '../../weather-display/weather-display';


const URL_WEATHER = 'https://api.openweathermap.org/data/2.5'

const WeatherRequest = (props) => {

    const city = props.city?.trim() ?? '';

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        setError(null);
        setWeatherData(null);

        if(city === '') {
            setLoading(false);
            return;
        }

        setLoading(true);

        axios.get(URL_WEATHER + '/weather', {
            params : {
                q : city,
                appid : 'c3fa448b20d4333b499f552522c429d3',
                lang : 'fr',
                units : 'metric'
            }
        }).then(({data}) => {

            setWeatherData({
                city : data.name,
                country : data.sys.country,
                temp : data.main.temp,
                tempMin : data.main.temp_min,
                tempMax : data.main.temp_max,
                description : data.weather.map(w => w.description).join(', ')
            });

        }).catch((error) => {

            setError(error.response.data.message);
    
        }).finally(() => {

            setLoading(false);

        });

    }, [city]);

    return (
        <div>
            {isLoading ? (
                <p>Chargement...</p>
            ) : error ? (
                <p>{error}</p>
            ) : weatherData ? (
                <WeatherDisplay />
            ) : (
                <p>Aucune données</p>
            )}
        </div>
    );

};

WeatherRequest.propTypes = {
    city : PropTypes.string.isRequired
}

export default WeatherRequest;