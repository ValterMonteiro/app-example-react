import './styles.css'

import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react';

import { movies } from './data';
import { useState } from 'react';

export function Gallery() {

    const [id, setId] = useState()

    console.log('clicou');

         let movie = movies[0] 

    function handkeClik(event){
        setId(event.target.value);
        console.log(movie.id);
    }

    return (
        <>
            <section className="gallery">
                <img src={movie.images.poster} alt="" />
                <div className='galleryArrow'>
                    <ArrowCircleLeft size={32} onClick={handkeClik}/>
                    <ArrowCircleRight size={32} onClick={handkeClik} />
                </div>
            </section>
        </>
    );
}