import { useState } from "react";



const SearchBar = (props) => {
    const {msg, onSearch} = props;
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query.toLowerCase());
        setQuery('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>{msg} : </label>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>

            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;