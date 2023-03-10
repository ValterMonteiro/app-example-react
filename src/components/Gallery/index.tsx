import './styles.css'

import { ArrowCircleRight } from 'phosphor-react';

import { movies } from './data';
import { useState } from 'react';

export function Gallery() {

    const [id, setId] = useState(0);

    function handleClick() {        
        (id < (movies.length -1))? setId(id + 1): setId(0);
        console.log(id);
    }


    const movie = movies[id];

    return (
        <>
            <section className="gallery">
                <img src={movie.images.poster} alt="" />
                <details className='galleryDetails'>
                <summary>Ver Detalhes!</summary>
                <h1>{movie.title}</h1>
                <p>{movie.synopsis}</p>
                </details>
                <div className='galleryArrow'>
                    <ArrowCircleRight size={32} onClick={handleClick} />
                </div>
            </section>
        </>
    );
}