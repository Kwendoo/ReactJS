import { useEffect, useState } from "react";
import axios from 'axios';


const AgePrenom = ({prenom}) => {
    const URL_API = `https://api.agify.io/?name=__name__&country_id=BE`;

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {

        setLoading(true);
        setError(null);

        const url = URL_API.replace('__name__', prenom);

        axios.get(url)
             .then(({data}) => {
                 setData({name : data.name, age : data.age});
             })
             .catch(e => {setError(e.error);})
             .finally (() => {setLoading(false);})

    }, [prenom]);

    return(
        <>
            <div>
                {isLoading ? (
                    <p>Chargement ...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : data && (
                    <>
                        <p>Prénom : {data.name}</p>
                        <p>Age du prénom : {data.age}</p>
                    </>
                )}
            </div>
        </>
    )
}

export default AgePrenom;