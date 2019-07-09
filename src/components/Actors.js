import React from "react";
import { actors } from "../data";

const Actors = () => {
  return (
    <div>
      <h1>Actors Page </h1>
      {actors.map((actor, index) => {
        return (
          <div className="actor" key={index}>
            {actor.name}
            <ul style={{ listStyleType: "none" }}>
              {actor.movies.map((movie, index) => {
                return <li key={index}>{movie}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Actors;
