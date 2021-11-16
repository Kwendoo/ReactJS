import { useState } from "react";
import SearchBar from "../../components/search-bar/search-bar";
import WeatherRequest from "../../components/search-bar/weather-request/weatehr-request";


const WeatherApp = () => {

    const [city, setCity] = useState(undefined);

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
                    <WeatherRequest city={city}/>
                )}
            <h3>Résultats sauvegardés</h3>
        </div>
    );

};

export default WeatherApp;