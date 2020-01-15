import React from 'react'
import Movie from './Movie'

const MovieList = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                        props.movies.map((movie, i) => {
                            return (
                                <Movie viewMovieInfo={props.viewMovieInfo} getSimilarMovies={props.getSimilarMovies} movieId={movie.id} key={i} image={movie.poster_path}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList;