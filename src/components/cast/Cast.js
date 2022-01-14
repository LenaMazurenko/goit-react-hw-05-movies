import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../utils/fetchQuery';
//import {  } from './MovieDetails.styled';

export default function MovieDetails({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCast(movieId).then(response => setCast([...response.cast]));
  }, [movieId]);

  console.log(cast, movieId);

  return (
    <>
      {/* {cast && (
        <ul>
          {cast.map(el => {
            return (
              <li key={el.id}>
                <img
                  src={`https://www.themoviedb.org/t/p/w780/${el.profile_path}`}
                  alt={el.original_name}
                />
                <h3>{el.original_name}</h3>
                <p>Character: {el.character}</p>
              </li>
            );
          })}
        </ul>
      )} */}
    </>
  );
}
