import React from 'react'
import SimilarMovie from './SimilarMovie'

const SimilarMovieList = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                       props.similarMovies.map((similarMovie, i) => {
                        return (
                            <SimilarMovie key={i} movieId={similarMovie.id} image={similarMovie.poster_path} title={similarMovie.title}/>
                        )
                       })
                    }
                </div>
            </div>
        </div>
    )
}

export default  SimilarMovieList;