import React from 'react';
import Movies from '../movies/Movies';
import MovieForm from '../movies/MovieForm';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <MovieForm />
      </div>
      <div>
        <Movies />
      </div>
    </div>
  );
};

export default Home;
