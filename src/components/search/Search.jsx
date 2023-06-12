import './search.css';
import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom';
import { useState } from 'react';

function Search ({handleChangeSearch}){

    const [searchClick, setSearchClick] = useState(false);

    const handleChangeClick = (() => {
        setSearchClick(!searchClick);
    });

    return (
        <div className='searchBox'>
            <Link onClick={handleChangeClick} className='seachIcon' ><FaSearch  /></Link>
            {
                searchClick &&
                <input onChange={handleChangeSearch} type="text" placeholder='Pesquisar' />
            }
        </div>
    )
}

export default Search;