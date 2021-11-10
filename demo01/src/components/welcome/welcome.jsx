import PropTypes from 'prop-types';
import style from './welcome.module.css';

const Welcome = function (props) {

    const {firstname, lastname} = props;

    return (
        <p>Bonjour 
            <span className={style.name}> {firstname} {lastname}</span>
        </p>
    );
}

Welcome.defaultProps = {
    lastname : 'Primogallo'
}

Welcome.propTypes = {
    firstname : PropTypes.string.isRequired,
    lastname : PropTypes.string
}

export default Welcome;