import React from 'react';
import NavBar from './NavBar'
import MovieList from './MovieList'
import Pagination from './Pagination'
import MovieInfo from './MovieInfo'
import axios from 'axios';
import { async } from 'q';

const movieApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
  }
});


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentPage: 1,
      currentMovie: null,
      similarMovies: []
    };
    this.apiKey = 'fbdf8f0bc6851ffc975c8254d9dbc7fa';
    this.getPopularMovies();
  }

  getPopularMovies = async () => {
    const response = await movieApi.get(`/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`); 
    this.setState({
      movies: [...response.data.results]
    });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  }

  getSimilarMovies = async (id) => {
    const response = await movieApi.get(`/movie/${id}/similar?api_key=${this.apiKey}&language=en-US&page=1`);
    this.setState({
      similarMovies: [...response.data.results]
    });
  }

  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id);
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
    this.setState({
      currentMovie: newCurrentMovie
    })
  }

  closeMovieInfo = () => {
    this.setState({
      currentMovie: null
    })
  }

  nextPage = async(pageNumber) => {
    const response = await movieApi.get(`/movie/popular?api_key=${this.apiKey}&language=en-US&page=${pageNumber}`);
    this.setState({
      movies: [...response.data.results],
      currentPage: response.data.page
    });
  }

  render() {  
    return (
    <div className="App">
     <NavBar />
     {
       this.state.currentMovie == null 
       ? <div>
         <MovieList movies={this.state.movies} viewMovieInfo={this.viewMovieInfo} getSimilarMovies={this.getSimilarMovies}/>
         <Pagination currentPage={this.state.currentPage} nextPage={this.nextPage}/> 
        </div>
       : <div>
            <MovieInfo currentMovie={this.state.currentMovie} similarMovies={this.state.similarMovies} closeMovieInfo={this.closeMovieInfo}/> 
          </div>
     }  
    </div>
    )
  }
}




