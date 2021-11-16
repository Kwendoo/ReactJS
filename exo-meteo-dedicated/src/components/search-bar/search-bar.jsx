import PropTypes from 'prop-types';
import { useState } from 'react';

const SearchBar = (props) => {

    const {placeholder, onSearch} = props;
    const label = props.label?.trim() ?? '';

    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault(); //annuler l'effet primaire du boutton
        
        onSearch(query); //envoie la réponse
        
        setQuery(''); //reset form
    }

    return (
        <form onSubmit={handleSubmit}>
            {label && (
                <label htmlFor='query'>{label} : </label>
            )}
            <input type="text" placeholder={placeholder}
                value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button type='submit'>Rechercher</button>
        </form>
    );

};

SearchBar.defaultProps = {
    palceholder : '',
    label : '', //ou null ou undefined
    onSearch : () => {}
};

SearchBar.propTypes = {
    palceholder : PropTypes.string,
    label : PropTypes.string,
    onSearch : PropTypes.func
};

export default SearchBar;