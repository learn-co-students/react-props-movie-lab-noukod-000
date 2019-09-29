import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards =(() => movieData.map(r=>(<MovieCard title={r.title} IMDBRating={r.IMDBRating} genres={r.genres} poster={r.poster}/>)))

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
