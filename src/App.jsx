import { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/navBar/Nav';
import Card from './components/card/Card.jsx';



function App() {

  const [pageNumber, setPageNumber] = useState(1)
  const [dataAll, setDataAll] = useState([]);
  const [films, setFilms] = useState([]);




  useEffect(() => {

    const baseURL = `https://api.themoviedb.org/3`;
    const key = 'api_key=5ec5e2a1c7e8d83302a468d15e1ed7c2';
    const url = `${baseURL}/discover/movie?sort_by=popularity.desc&${key}&page=${pageNumber}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setDataAll(data);
        setFilms(data['results']);
        console.log(films)


      })
  }, [pageNumber])


  const NextPage = () => {
    return pageNumber > 0 && pageNumber < dataAll.total_pages ? setPageNumber(pageNumber + 1) : false
  };
  window.scrollTo(0, 0);


  const returnPage = () => {
    return pageNumber > 1 && pageNumber < dataAll.total_pages ? setPageNumber(pageNumber - 1) : false
  };




  return (
    <>
      <Nav />
      <div className='container'>
        
        <div className='cardsContainer'>
          {films.map((film) => (
            <Card key={film.id} film={film} ></Card>
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
