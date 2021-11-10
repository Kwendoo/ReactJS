import PropTypes from 'prop-types';

const PoepleListItem = (props) => {
    const {firstname, lastname} = props;

    return (
        <li>{firstname} {lastname.toUpperCase()}</li>
    );
}

const PoepleList = (props) => {

    const poepleJSX = props.data.map(
        p => <PoepleListItem key = {p.id} {...p}/>
    );

    return (
        <ul>
            {poepleJSX}
        </ul>
    );

}

PoepleList.defaultProps = {
    data : []
}

PoepleList.propTypes = {
    data : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.number.isRequired,
        firstname : PropTypes.string.isRequired,
        lastname : PropTypes.string.isRequired
    }))
}

export default PoepleList;