import React from 'react'

const Movie = (props) => {
    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect">
                    {
                        props.image != null 
                        ? <img src={`https://image.tmdb.org/t/p/w185${props.image}`} alt="Movie image" style={{height: 300}}></img> 
                        : <img src={`https://ru.uoslab.com/images/tovary/no_image.jpg`} alt='Movie image'></img>
                    }
                </div>                             
                <div className="card-content">
                    <p><a href="#" onClick={() => {props.viewMovieInfo(props.movieId);  props.getSimilarMovies(props.movieId);}} >More info</a></p>
                </div>
            </div>
        </div>
    )
}

export default Movie