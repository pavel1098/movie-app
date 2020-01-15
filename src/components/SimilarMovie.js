import React from 'react'

const SimilarMovie = (props) => {
    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect">
                    {
                        props.image != null 
                        ? <img src={`https://image.tmdb.org/t/p/w185${props.image}`} alt="Movie image"></img> 
                        : <img src={`https://ru.uoslab.com/images/tovary/no_image.jpg`} alt='Movie image'></img>
                    }
                </div>
                <div className="card-content" style={{height: 70, padding: 5}}>
                    {props.title}
                </div>
            </div>
        </div>
    )
}

export default SimilarMovie
