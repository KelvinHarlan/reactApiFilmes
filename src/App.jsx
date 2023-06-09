import { useState, useEffect } from 'react';
import './App.css';
import ButtonDescrition from './components/button/Button.jsx';


function App() {
  const img = `https://image.tmdb.org/t/p/w500`;
  const [pageNumber, setPageNumber] = useState(1)
  const [dataInfo, setDataInfo] = useState([]);
  const [dataAll, setDataAll] = useState([]);
  const [maxPage, setMaxPage] = useState(dataAll.total_pages);

  useEffect(() => {

    const baseURL = `https://api.themoviedb.org/3`;
    const key = 'api_key=5ec5e2a1c7e8d83302a468d15e1ed7c2';
    const url = `${baseURL}/discover/movie?sort_by=popularity.desc&${key}&page=${pageNumber}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setDataAll(data);
        setDataInfo(data.results);

        console.log(data)

      })
  }, [pageNumber])


  const NextPage = () => {
    return pageNumber > 0 && pageNumber < dataAll.total_pages ? setPageNumber(pageNumber + 1) : false};
    window.scrollTo(0, 0);


  const returnPage = () => {
    return pageNumber > 1 && pageNumber < dataAll.total_pages ? setPageNumber(pageNumber -1) : false};
  


  return (
    <>
      <div className='container'>
        <h1>Filmes</h1>
        <div className='cardsContainer'>
          {dataInfo.map((films) => (
            <div key={films.id} className='card'>
              <h4 className='titleFilm'>{films.title}</h4>
              <img src={img + films.poster_path} alt="" />
              <div className="avaliation">
                <p>Nota: {films.vote_average}</p>
              </div>
              <ButtonDescrition text='Informações' />
            </div>
          ))}
        </div>
        <div className='btnContainer'>
          <button className='btnPage' onClick={returnPage}>Anterior</button>
          <div className='page'>
            <span className='currentPage'>{pageNumber}</span> - 
              {dataAll.total_pages}
            </div>
          <button className='btnPage' onClick={NextPage}>Próxima</button>
        </div>
      </div>

    </>
  )
}

export default App
