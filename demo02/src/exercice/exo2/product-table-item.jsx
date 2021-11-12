import PropTypes from 'prop-types';
import DisplayPrice from '../display-price/display-price';

const ProductTableItem = (props) => {
    const {name, price, promo} = props;

    return (
        <tr>
            <td>{name}</td>
            <td>
                <DisplayPrice price={price} promo={promo} />
            </td>
        </tr>
    )
};

ProductTableItem.defaultProps = {
    promo: false
};

ProductTableItem.propTypes = {
    name:PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    promo: PropTypes.bool
};

export default ProductTableItem;