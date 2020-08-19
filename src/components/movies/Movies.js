import React, { Fragment, useContext } from 'react';
import MovieContext from '../../context/movie/movieContext';

const Movies = () => {
  //access any state or methods associated with movie context
  const movieContext = useContext(MovieContext);

  const { movies } = movieContext;

  return (
    <Fragment>
      {movies.map((movie) => (
        <h1>{movie.desc}</h1>
      ))}
    </Fragment>
  );
};

export default Movies;
