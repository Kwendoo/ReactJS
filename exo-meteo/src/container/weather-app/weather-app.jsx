import { useState } from "react";
import SearchBar from "../../components/search-bar/search-bar";
import axios from 'axios';

const URL_WEATHER = 'https://api.openweathermap.org/data/2.5'

// 

const WeatherApp = () => {

    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const handleSearch = (city) => {

        setLoading(true);
        setWeather(null);
        setError(null)

        axios.get(URL_WEATHER + '/weather', {
            params : {
                q : city,
                appid : 'c3fa448b20d4333b499f552522c429d3',
                lang : 'fr',
                units : 'metric'
            }
        }).then(({data}) => {

            setWeather({
                city : data.name,
                country : data.sys.country,
                temp : data.main.temp,
                tempMin : data.main.temp_min,
                tempMax : data.main.temp_max,
                description : data.weather.map(w => w.description).join(', ')
            });

        }).catch((error) => {

            setError(error.message);
    
        }).finally(() => {

            setLoading(false);

        });

    }

    return (
        <div>
            <h3>Recherche la météo</h3>
            <SearchBar placeholder = 'Namur' label = 'Entrez votre ville'
                       onSearch={handleSearch}/>
            <h3>Résultat de la recherche</h3>
            ...
            <h3>Résultats sauvegardés</h3>
            ...
        </div>
    );

};

export default WeatherApp;