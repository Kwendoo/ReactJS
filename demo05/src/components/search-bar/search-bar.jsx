import PropTypes from 'prop-types';
import { useState } from 'react';

const SearchBar = (props) => {


    const [querry, setQuerry] = useState('');

    const handleChange = (e) =>{
        const value = e.target.value;


        setQuerry(value)

        props.onSearch(value);
    }

    const handleReset = () => {
        setQuerry('');
        props.onSearch('');
    }

    return (
        <div>
            <input type="text" 
            value = {querry} 
            onChange= {handleChange}/>
            <button type="button" onClick={handleReset}>Effacer</button>
        </div>
    );
};

SearchBar.defaultProps = {
    onSearch : () => {} // -> loop
};

SearchBar.propTypes = {
    onSearch : PropTypes.func
};

export default SearchBar;