import PropTypes from 'prop-types';
import style from './age.module.css';

const Exercice01 = function (props) {

    const {prenom, age} = props;

    return (
        <div className={style.exo1}>
            <h1>Bienvenue {prenom} sur l'application React</h1>
            <p>Vous avez {age} ans!</p>
        </div>
    );
}

Exercice01.defaultProps = {
    age : 18
}

Exercice01.propTypes = {
    firstname : PropTypes.string,
    age : PropTypes.number
}

export default Exercice01;