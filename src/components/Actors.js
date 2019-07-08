import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
		<h1>Actors Page</h1>
		{actors.map(actors => (
			<div key={actors.name}>
				<h3>Name: {actors.name}</h3>
				<p>Movies:</p>
				<ul>
					{actors.movies.map(movie => <li key={movie} >{movie}</li>)}
				</ul>
				<br />
			</div>
		))}
	</div>
  );
};

export default Actors;
