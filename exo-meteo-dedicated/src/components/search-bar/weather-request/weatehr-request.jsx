import PropTypes from 'prop-types';
import WeatherDisplay from '../../weather-display/weather-display';
import { useWeatherRequest } from '../../../hooks/request-hook';



const WeatherRequest = (props) => {

    const city = props.city?.trim() ?? '';
    const {onSaveResult} = props;

    const [isLoading, error, weatherData, reload] = useWeatherRequest(city);

    const handleSave = () => {
        onSaveResult(weatherData);
    };

    return (
        <div>
            {isLoading ? (
                <p>Chargement...</p>
            ) : error ? (
                <p>{error}</p>
            ) : weatherData ? (
                <>
                    <WeatherDisplay {...weatherData}/>
                    <button onClick={reload}>Actualiser</button>
                    <button onClick={handleSave}>Sauvegarder les données</button>
                </>
            ) : (
                <p>Aucune données</p>
            )}
        </div>
    );

};

WeatherRequest.defaultProps = {
    onSaveResult : () => {}
};

WeatherRequest.propTypes = {
    city : PropTypes.string.isRequired,
    onSaveResult : PropTypes.func
};

export default WeatherRequest;