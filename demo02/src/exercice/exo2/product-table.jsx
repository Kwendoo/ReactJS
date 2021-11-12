import PropTypes from 'prop-types';
import ProductTableHead from './product-table-head';
import ProductTableItem from './product-table-item';

const ProductTable = (props) => {

    const productJSX = props.data.map(
        p => <ProductTableItem key={p.id} {...p} />
    );

    return (
        <table>
            <ProductTableHead />
            <tbody>
                {productJSX}
            </tbody>

        </table>
    );
}

ProductTable.defaultProps ={
    data: []
}

ProductTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    }))
}

export default ProductTable;