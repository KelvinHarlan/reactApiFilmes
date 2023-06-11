import './search.css';

function Search ({handleChangeSearch}){
    return (
        <div className='searchBox'>
            <input onChange={handleChangeSearch} type="text" placeholder='Pesquisar' />
        </div>
    )
}

export default Search;