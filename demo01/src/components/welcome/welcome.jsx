
const Welcome = function (props) {

    const {firstname, lastname} = props;

    return (
        <p>Bonjour {firstname} {lastname}</p>
    );
}

Welcome.defaultProps = {
    lastname : 'Primogallo'
}

export default Welcome;