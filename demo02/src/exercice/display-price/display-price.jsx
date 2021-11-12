import PropTypes from 'prop-types';
import style from './display-price.module.css';

const DisplayPrice = ({price, promo}) => {

    const stylePrice = promo ? style.inPromo: '';

    return (
        <span className={stylePrice}>{price}€</span>
    )
};

DisplayPrice.defaultProp = {
    promo: false
};

DisplayPrice.propTypes = {
    price: PropTypes.number.isRequired,
    promo: PropTypes.bool
};

export default DisplayPrice;