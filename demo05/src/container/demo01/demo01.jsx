import { useState } from "react";
import PersonList from "../../components/person-list/person-list";
import SearchBar from "../../components/search-bar/search-bar";


const Demo01 = () => {



    const [people , setPeople] = useState([
        {id : 1, firstName : 'Zaza', lastName : 'Vanderquack'},
        {id : 2, firstName : 'Antoine', lastName : 'Lagna'},
        {id : 3, firstName : 'Liam', lastName : 'Lagna'},
        {id : 4, firstName : 'Balthazar', lastName : 'Picsou'},
        {id : 5, firstName : 'Gontran', lastName : 'Bonheur'}
    ]);

    const [filter, setFilter] = useState('');

    const handleSearch = (querry) => {
        console.log(querry);
        setFilter(querry);
    }

    const data = filter !== '' ? people.filter(p => p.firstName.includes(filter)) : people;

    return (
        <div>
            <h2>Demo 1</h2>
            <SearchBar onSearch={handleSearch}/>
            <PersonList data={data}/>
        </div>
    );
};

export default Demo01