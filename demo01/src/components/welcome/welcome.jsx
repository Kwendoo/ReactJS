import PropTypes from 'prop-types';

const Welcome = function (props) {

    const {firstname, lastname} = props;

    return (
        <p>Bonjour {firstname} {lastname}</p>
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