import './search.css';
import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom';
import { useState } from 'react';

function Search ({handleChangeSearch, handleChangeSelect, genresFilms}){

    const [searchClick, setSearchClick] = useState(false);

    const handleChangeClick = (() => {
        setSearchClick(!searchClick);
    });

    return (
        <div className='searchBox'>
            <select onChange={handleChangeSelect} name="categoriesSelect" id="categoriesSelect">
                {
                    genresFilms.map((el) => (
                        <option value={el.id} key={el.id}>{el['name']}</option>
                    ))
                }
            </select>

            <Link onClick={handleChangeClick} className='seachIcon' ><FaSearch  /></Link>
            {
                searchClick &&
                <input onChange={handleChangeSearch} type="text" placeholder='Pesquisar' />
            }
        </div>
    )
}

export default Search;