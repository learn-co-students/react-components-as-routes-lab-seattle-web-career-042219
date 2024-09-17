import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {
          movies.map((movie, index) => 
            <div key={index}>
              <h2>Name: {movie.title}</h2>
              <p>Time: {movie.time}</p>
              <ul>
                {
                  movie.genres.map(genre =>
                    <li key={Math.random()}>
                      {genre}
                    </li>
                  )
                }
              </ul>
            </div>
          )
        }
    </div>
  );
};

export default Movies;
