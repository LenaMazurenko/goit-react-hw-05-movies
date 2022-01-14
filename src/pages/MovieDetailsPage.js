import { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { fetchMovie } from '../utils/fetchQuery';
import Container from '../components/Container/Container';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import Cast from '../components/cast/Cast';
import Reviews from '../components/reviews/Reviews';
import { NavLinkEl } from '../components/AppNav/AppNav.styled';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetchMovie(movieId).then(obj => {
      setMovieDetails(obj);
    });
  }, [movieId]);

  return (
    <Container>
      {movieDetails && <MovieDetails md={movieDetails} />}
      <hr />
      <h3>Additional Info:</h3>
      <ul>
        <li>
          <NavLinkEl to={`/movies/${movieId}/cast`}>Cast</NavLinkEl>
        </li>
        <li>
          <NavLinkEl to={`/movies/${movieId}/reviews`}>Reviews</NavLinkEl>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="cast" element={<Cast movieId={movieId} />} />
        <Route path="reviews" element={<Reviews movieId={movieId} />} />
      </Routes>
    </Container>
  );
}
//https://www.themoviedb.org/t/p/original/eNI7PtK6DEYgZmHWP9gQNuff8pv.jpg
