import './search.css';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Search({ handleChangeSearch, handleChangeSelect, genresFilms }) {

    const [searchClick, setSearchClick] = useState(false);

    const handleChangeClick = (() => {
        setSearchClick(!searchClick);
    });

    return (
        <div className='searchBox'>

            <div className='searchCard'>
                <Link onClick={handleChangeClick} className='seachIcon' ><FaSearch /></Link>
                {
                    searchClick &&
                    <input onChange={handleChangeSearch} type="text" placeholder='Search' />
                }
            </div>

            <select onChange={handleChangeSelect} name="categoriesSelect" id="categoriesSelect">
                <option value='' key='e18a7d8'>Categories</option>
                {
                    genresFilms.map((el) => (
                        <option value={el['id']} key={el['id']}>{el['name']}</option>
                        
                    ))
                }
            </select>

        </div>
    )
}

export default Search;