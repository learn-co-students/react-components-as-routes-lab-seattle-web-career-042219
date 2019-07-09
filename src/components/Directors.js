import React from "react";
import { directors } from "../data";

const Directors = () => {
  return (
    <div>
      <h1>Directors Page </h1>
      {directors.map((director, index) => {
        return (
          <div className="director" key={index}>
            {director.name}
            <ul style={{ listStyleType: "none" }}>
              {director.movies.map((movie, index) => {
                return <li key={index}>{movie}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Directors;
