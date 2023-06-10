import { useState } from "react";
import './card.css';
import TitleCard from "./titleCard/TitleCard";

function Card({ film: { title, poster_path, vote_average, overview } }) {
    const [showDescrition, setShowDescrition] = useState(false);
    const imgFilm = `https://image.tmdb.org/t/p/w500${poster_path}`;



    return (
        <div className="card">
            <TitleCard title={title} />
            {
                showDescrition === true ?
                    <p className="descrition">{overview}</p> :
                    <img src={imgFilm} alt={title} />
            }
            <div className="vote">
                <p className="voteNumber">Nota: {vote_average}</p>
            </div>

            <button className="btnDescrition" onClick={() => { setShowDescrition(!showDescrition) }}>mostrar</button>
        </div>
    )
}

export default Card;