import PropTypes from 'prop-types';

const PeopleList = (props) => {

    const peopleJSX = props.data.map(
        p => <li key={p.id}>{p.firstname} {p.lastname}</li>
    );

    return (
        <ul>
            {peopleJSX}
        </ul>
    );
}

PeopleList.defaultProps ={
    data: []
}

PeopleList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired
    }))
}

export default PeopleList;