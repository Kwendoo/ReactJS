import { useState } from "react";
import PropTypes from 'prop-types';


const INITIAL_COUNT = 0

const Compteur = (props) => {

    const [nb, setNb] = useState(INITIAL_COUNT);
    const {inc} = props;

    const increment = () =>{
        setNb( nb => nb + inc)
    }

    const reset = () =>{
        setNb(INITIAL_COUNT)
    }


    return (
        <>
        <h3>Compteur incrémentation manuel de {inc}</h3>
        <p>Compteur : {nb}</p>

        <button onClick={increment}>+ {inc}</button>
        {nb !== INITIAL_COUNT && (<><br /><button onClick={reset}>Reset</button></>)}
        </>
    )

}

Compteur.defaultProps = {
    inc : 1
}

Compteur.propTypes = {
    inc : PropTypes.number
}

export default Compteur;