import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../utils/fetchQuery';
//import {  } from './MovieDetails.styled';

export default function Reviews({ movieId }) {
  const [movieReviews, setMovieReviews] = useState(null);

  console.log(movieReviews);

  useEffect(() => {
    fetchMovieReviews(movieId).then(obj => {
      setMovieReviews(obj);
    });
  }, [movieId]);

  return <p>{movieReviews.id}</p>;
}
