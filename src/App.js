import { Routes, Route } from 'react-router-dom';

import Container from './components/Container/Container';
import AppNav from './components/AppNav/AppNav';

import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';

import MovieDetailsPage from './pages/MovieDetailsPage';
import MovieDetailsCastPage from './pages/MovieDetailsCastPage';
import MovieDetailsReviewPage from './pages/MovieDetailsReviewPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Container>
      <AppNav />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/movies" element={<MoviePage />} />
        <Route exact path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route
          exact
          path="/movies/:movieId/cast"
          element={<MovieDetailsCastPage />}
        />
        <Route
          exact
          path="/movies/:movieId/reviews"
          element={<MovieDetailsReviewPage />}
        />
        <Route element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
}
