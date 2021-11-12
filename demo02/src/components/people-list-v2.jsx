import PropTypes from 'prop-types';

const PeopleListItem = (props) => {
    const {firstname, lastname} = props;
    
    return (
        <li>{firstname} {lastname.toUpperCase()}</li>
    );
}

const PeopleListV2 = (props) => {

    const peopleJSX = props.data.map(
        p => <PeopleListItem key={p.id} {...p}/>
    );

    return (
        <ul>
            {peopleJSX}
        </ul>
    );
}

PeopleListV2.defaultProps ={
    data: []
}

PeopleListV2.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired
    }))
}

export default PeopleListV2;