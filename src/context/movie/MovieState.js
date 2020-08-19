import React, { useReducer } from 'react';
import uuid from 'uuid';
import MovieContext from './movieContext';
import movieReducer from './movieReducer';
import {
  ADD_MOVIE,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_MOVIES,
  CLEAR_FILTER,
} from '../types';

const MovieState = (props) => {
  const initialState = {
    movies: [
      {
        img_url: 'www.imgs.com',
        desc: 'movie 1',
        id: 1,
      },
      {
        img_url: 'www.imgs.com',
        desc: 'movie 2',
        id: 2,
      },
      {
        img_url: 'www.imgs.com',
        desc: 'movie 3',
        id: 3,
      },
    ],
  };
  const [state, dispatch] = useReducer(movieReducer, initialState);

  //ADD MOVIE
  //SET CURRENT
  //CLEAR CURRENT
  //FILTER MOVIES
  //CLEAR FILTERS

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
