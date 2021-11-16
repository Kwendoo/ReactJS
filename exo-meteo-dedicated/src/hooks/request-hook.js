import { useState, useEffect } from "react";
import axios from 'axios';


const {REACT_APP_WEATHER_URL,REACT_APP_WEATHER_KEY} = process.env;


export const useWeatherRequest = (city) => {

    const [loadTime, setLoadTime] = useState(new Date());
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

        axios.get(REACT_APP_WEATHER_URL + '/weather', {
            params : {
                q : city,
                appid : REACT_APP_WEATHER_KEY,
                lang : 'fr',
                units : 'metric'
            }
        }).then(({data}) => {

            setWeatherData({
                id : data.id,
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

    }, [city, loadTime]);

    const reload = () => {
        setLoadTime(new Date());
    }


    return [isLoading, error, weatherData, reload];


};