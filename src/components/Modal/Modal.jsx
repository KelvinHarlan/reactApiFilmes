import React, { useState } from 'react';
import './modal.css';

function Modal({ onClose, overview, title, imgFilm, vote_average, original_language, release_date }) {

    return (
        <div className="modal">
            <div className="modal-content">
                <div className='closeBtnBox'>
                    <button className="close" onClick={onClose}>x</button>
                </div>

                <div className='infoBox'>
                    <div className='imgMovie'>
                        <img src={imgFilm} alt={title} />
                    </div>

                    <div className='movieInfo'>
                        <h4><span className='colorGreen'>Title:</span> {title}</h4>
                        <h4><span className='colorGreen'>Vote:</span> {vote_average}</h4>
                        <h4><span className='colorGreen'>Language:</span> {original_language}</h4>
                        <h4><span className='colorGreen'>movie release:</span> {release_date}</h4>
                        
                    </div>
                </div>

                <div className='modalInfoDescrition'>
                    <h4 className='descritionTitle'>Descrition</h4>
                    {overview}
                </div>
            </div>
        </div>
    );
};

export default Modal;