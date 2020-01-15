import React from 'react'
import SimilarMovieList from './SimilarMovieList'


const MovieInfo = (props) => {
    return (
        <div className="container">
            <div className="row" onClick={props.closeMovieInfo} style={{cursor: "pointer", paddingTop: 50}}>
                <i className="material-icons">navigate_before</i>
                <span style={{marginLeft: 10}}>Go back</span>
            </div>
            <div className="row">
                <div className='col s12 m4'>
                    {                 
                        props.currentMovie.poster_path != null 
                        ? <img src={`https://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="Movie image" style={{width: "90%"}}></img> 
                        : <img src={`https://ru.uoslab.com/images/tovary/no_image.jpg`} alt='Movie image'></img>    
                    }
                </div>
                <div className='col s12 m8'>
                    <div className='info-container'>
                    <h4><p>{props.currentMovie.title}</p></h4>
                        <p><b>Release date:</b> {props.currentMovie.release_date}</p>
                        <p>{props.currentMovie.overview}</p>
                        <p><b>Original language: </b>{props.currentMovie.original_language}</p>
                        <p><b>Popularity: </b>{props.currentMovie.popularity}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <h4><p>Similar movies</p></h4>
            </div>
            <div >
                <SimilarMovieList  similarMovies={props.similarMovies}/>
            </div>
        </div>
        
    )
}


export default MovieInfo