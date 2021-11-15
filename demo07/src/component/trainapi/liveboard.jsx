import axios from 'axios';
import { useEffect, useState } from 'react';
import ErrorScreen from './errorscreen';
import LoadingScreen from './loadingscreen';
import ResponseScreen from './responsescreen';

const URL_IRAIL = 'http://api.irail.be/liveboard/?station=__station__&format=json';

const LiveBoard = ({station}) => {

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [timeRequest, setTimeRequest] = useState(new Date());

    useEffect(() => {
        const url = URL_IRAIL.replace('__station__', station);

        setLoading(true);
        setError(null);
        setData(null);

        axios.get(url)
             .then(({data}) => {
                 console.log(data);
                 setData({
                     station : data.station,
                     departures : data.departures.departure.map(
                         dep => ({
                             id : dep.vehicle,
                             destination : dep.station,
                             time : dep.time,
                             delay : dep.delay
                         })
                     )
                 })
             })
             .catch(error => {
                setError('Station not found');
                console.log(error.message);
             })
             .finally(() => {
                 setLoading(false);
                 console.log('Fin de chargement');
             })
    }, [station, timeRequest])

    return(
        <div>
            {isLoading ? (
                <LoadingScreen />
            ) : error ? (
                <ErrorScreen message={error}/>
            ) : data && (
                <>
                    <button onClick={() => setTimeRequest(new Date())}>Reload</button>
                    <ResponseScreen {...data} />
                </>
            )}
        </div>
    )

}

export default LiveBoard;