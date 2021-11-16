import PropTypes from 'prop-types';


const WeatherList = ({weatherList}) => {

    const weatherListJSX = weatherList.map(
        w => <li key={w.id}>{w.city} {w.temp} °C</li>
    );

    return (
        <ul>
            {weatherListJSX}
        </ul>
    );

};

WeatherList.defaultProps = {
    weatherList : []
};

WeatherList.propTypes = {
    weatherList : PropTypes.array
};

export default WeatherList;