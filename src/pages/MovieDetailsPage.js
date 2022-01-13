import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovie } from '../utils/fetchQuery';

export default function MovieDetailsPage() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovie(movieId).then(obj => {
      setMovieDetails(obj);
    });
  }, [movieId]);

  return (
    <>
      {movieDetails && (
        <div>
          <img
            src={`https://www.themoviedb.org/t/p/w780/${movieDetails.backdrop_path}`}
            alt={movieDetails.original_title}
          />
          <h1>{movieDetails.original_title}</h1>
          <p>Average: {movieDetails.vote_average}</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movieDetails.genres.map(genre => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </ul>
        </div>
      )}
    </>
  );
}
//https://www.themoviedb.org/t/p/original/eNI7PtK6DEYgZmHWP9gQNuff8pv.jpg
