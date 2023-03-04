import {movies} from './data';

export function Gallery(){
    
    let movie = movies[0]
    return(
        <>
        <section className="gallery">
            <img src={movie.images.poster} alt="" />
            <button> ⬅antes</button>
            <button>depois➡ </button>
        </section>
        </>
    );
}