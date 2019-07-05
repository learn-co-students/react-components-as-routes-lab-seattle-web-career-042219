import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {
        directors.map((director, index) => 
          <div key={index}>
            <h2>Name: {director.name}</h2>
            <label>Movies:</label>
            <ul>
            {
              director.movies.map(movie => 
                <li key={Math.random()}>{movie}</li>
              )
            }
            </ul>
          </div>
        )
      }
    </div>
  );
}

export default Directors
