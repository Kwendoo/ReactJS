import PropTypes from 'prop-types';

const PersonList = (props) => {

    const peopleJSX = props.data.map(
        p => <li key={p.id}>{p.firstName} {p.lastName}</li>
    )

    return (
        <ul>{peopleJSX}</ul>
    );

};

PersonList.defaultProps = {
    data : []
};

PersonList.propTypes = {
    data : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.number.isRequired,
        firstName : PropTypes.string.isRequired,
        lastName : PropTypes.string.isRequired
    }))
}

export default PersonList;