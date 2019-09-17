import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    // map over your movieData array and return the correct
    const movieInfo = movieData.map( movie => {
      return <MovieCard title={movie.title || 'Unknown' } key={movie.title} IMDBRating ={movie.IMDBRating || null}  genres = {movie.genres || 'No Genre(s)Found'} poster={movie.poster} />
    } )
  return movieInfo
  }
  render() {
    
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }

}


