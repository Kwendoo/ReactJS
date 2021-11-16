import { useState } from "react";
import SearchBar from "../../components/search-bar/search-bar";
import WeatherRequest from "../../components/search-bar/weather-request/weatehr-request";
import WeatherListe from "../../components/weather-list/weather-list";


const WeatherApp = () => {

    const [city, setCity] = useState(undefined);
    const [weatherSaved, setWeatherSaved] = useState([]);

    const handleNewResult = (result) => {

        // if(weatherSaved.find(w => w.id === result.id) !== null){

        //     setWeatherSaved((ws) => ws.map(w => ws.id === result.id ? result : w));

        // } else {

        //     setWeatherSaved((ws) => [result, ...ws]);

        // }

        /****************************/

        setWeatherSaved((ws) => {
            if(ws.find((w) => w.id === result.id) !== undefined) {
                return ws.map(w => ws.id === result.id ? result : w);
            } else {
                return ([result, ...ws]);
            }
        })
    }

    return (
        <div>
            <h3>Recherche</h3>
                <SearchBar label = 'Entrez une ville'
                            placeholder = 'Dinant'
                            onSearch = {(c) => setCity(c)} />
            <h3>Resultat</h3>
                {!city ? (
                    <p>Aucune ville recherchée !</p>
                ) : (
                        <WeatherRequest city={city} onSaveResult={handleNewResult}/>
                )}
            <h3>Résultats sauvegardés</h3>
                    <WeatherListe weatherList={weatherSaved} />
        </div>
    );

};

export default WeatherApp;