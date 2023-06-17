import { useEffect, useState } from "react";
import './card.css';
import TitleCard from "./titleCard/TitleCard.jsx";
import Modal from '../Modal/Modal.jsx';

function Card({ film: { title, poster_path, vote_average, overview, original_language, release_date } }) {

    const onClose = () => {
        setShowDescrition(!showDescrition)
    }
    const [showDescrition, setShowDescrition] = useState(false);

    const imgFilm = `https://image.tmdb.org/t/p/w500${poster_path}`;



    return (
        <>
            <div className="card">
                <TitleCard title={title} />
                <img src={imgFilm} alt={title} />
                <div className="vote">
                    <p className="voteNumber">Nota: {vote_average}</p>
                </div>

                <button className="btnDescrition" onClick={() => { setShowDescrition(!showDescrition) }}>More</button>
            </div>
            {
                showDescrition &&
                <Modal onClose={onClose}
                    overview={overview}
                    title={title}
                    imgFilm={imgFilm}
                    vote_average={vote_average}
                    original_language={original_language}
                    release_date={release_date}
                ></Modal>
            }
        </>
    )
}

export default Card;