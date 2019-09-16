import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 
    return movieData.map(((movie, index) =>{
      let title = movie.title;
      let imdb = movie.IMDBRating;
      let genres = movie.genres;
      let poster = movie.poster;
      return (
        <li key={index}>
          <MovieCard title={title} IMDBRating={imdb} genres={genres} poster={poster} />
        </li>
      )
    }))
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
