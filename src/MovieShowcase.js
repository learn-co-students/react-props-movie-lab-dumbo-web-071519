import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map(singleMovie => {
      return <MovieCard 
      title = { singleMovie.title } 
      IMDBRating = { singleMovie.IMDBRating }
      genres = { singleMovie.genres }
      poster = { singleMovie.poster } 
      />      
    }) 
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }

}
