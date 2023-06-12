import './home.css';
import Card from '../card/Card.jsx';
import { useState, useEffect } from 'react';
import Search from '../search/Search';


function Home() {

    // declaration states

    const [pageNumber, setPageNumber] = useState(1);

    const [dataAll, setDataAll] = useState([]);

    const [films, setFilms] = useState([]);

    const [search, setSearch] = useState('');

    const [genresFilms, setGenresFilms] = useState([]);

    const [filteredFilms, setFilteredFilms] = useState([]);

    const [selectedId, setSelectedId] = useState('');


    //handleChange search

    const handleChangeSearch = (({ target }) => {
        setSearch(target.value);
    });

    //handreChange Select

    const handleChangeSelect = (({ target }) => {
        setSelectedId(target.value);
    });


    //consuming movies API

    useEffect(() => {

        const baseURL = `https://api.themoviedb.org/3`;
        const key = 'api_key=5ec5e2a1c7e8d83302a468d15e1ed7c2';
        const url = `${baseURL}/discover/movie?sort_by=popularity.desc&${key}&page=${pageNumber}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setDataAll(data);
                setFilms(data['results']);
            })
    }, [pageNumber])

    //consuming categories movies

    useEffect(() => {
        const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=5ec5e2a1c7e8d83302a468d15e1ed7c2&language=en-US';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setGenresFilms(data['genres'])

            })
    }, [films])

    // filtering movies

    useEffect(() => {

        const filtered = films.filter((film) =>
            film.title.toLowerCase().includes(search.toLowerCase())
        );

        setFilteredFilms(filtered);
    }, [films, search]);

    // Next page function

    const NextPage = () => {
        return pageNumber > 0 && pageNumber < dataAll.total_pages ? setPageNumber(pageNumber + 1) : false
    };
    window.scrollTo(0, 0);

    // return function

    const returnPage = () => {
        return pageNumber > 1 && pageNumber < dataAll.total_pages ? setPageNumber(pageNumber - 1) : false
    };

    // rendering content

    return (
        <>

            

            {selectedId}

            <Search handleChangeSearch={handleChangeSearch} handleChangeSelect={handleChangeSelect} genresFilms={genresFilms} />
            <div className='container'>
                <h2 className='highlights'>Highlights</h2>
                <div className='cardsContainer'>
                    {filteredFilms.map((film) => (
                        <Card key={film.id} film={film}></Card>
                    ))}
                </div>

                <div className='btnContainer'>
                    <button className='btnPage' onClick={returnPage}>Anterior</button>
                    <div className='page'>
                        <span className='currentPage'>
                            {pageNumber}
                        </span> -
                        <span className='maxPage'>
                            {dataAll.total_pages}
                        </span>
                    </div>
                    <button className='btnPage' onClick={NextPage}>Próxima</button>
                </div>
            </div>

        </>
    )
}

export default Home;