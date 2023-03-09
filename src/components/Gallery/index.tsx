import './styles.css'

import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react';

import { movies } from './data';
import { useState } from 'react';

export function Gallery() {
    
    const [id, setId] = useState(0);

    console.log('clicou');
    
    function handleClick() {
        setId( id + 1);
        //setMovie(event.target.value);
        console.log(id);
    }

    const movie = movies[id];

    return (
        <>
            <section className="gallery">
                <img src={movie.images.poster} alt="" />
                <div className='galleryArrow'>
                    <ArrowCircleLeft size={32} onClick={handleClick} />
                    <ArrowCircleRight size={32} onClick={handleClick} />
                </div>
            </section>
        </>
    );
}