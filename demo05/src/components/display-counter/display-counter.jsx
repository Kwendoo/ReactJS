import PropTypes from 'prop-types';

const DisplayCounter = ({count}) => {

    return (
        <p>Coumpteur : {count}</p>
    );

};

//↓ Idem au dessu
//const DisplayCounter = ({count}) => <p>Compteur : {count}</p>

DisplayCounter.propTypes = {
    count : PropTypes.number.isRequired
}

export default DisplayCounter;