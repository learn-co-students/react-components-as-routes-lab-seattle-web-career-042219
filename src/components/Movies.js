import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      <h1>Movies Page </h1>
      {movies.map((movie, index) => {
        return (
          <div className="movie" key={index}>
            {movie.title}
            {movie.time}
            <ul style={{ listStyleType: "none" }}>
              {movie.genres.map((genre, index) => {
                return <li key={index}>{genre}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
