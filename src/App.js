import { Routes, Route } from 'react-router-dom';

import Container from './components/Container/Container';
import AppNav from './components/AppNav/AppNav';

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';

import MovieDetailsPage from './pages/MovieDetailsPage';
// import MovieDetailsCastPage from './pages/MovieDetailsCastPage';
// import MovieDetailsReviewPage from './pages/MovieDetailsReviewPage';
// import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Container>
      <AppNav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies/" element={<MoviesPage />} />
        <Route path="/movies/:movieId*" element={<MovieDetailsPage />} />
        {/* <Route
          path="/movies/:movieId/cast"
          element={<MovieDetailsCastPage />}
        />
        <Route
          path="/movies/:movieId/reviews"
          element={<MovieDetailsReviewPage />}
        />
        <Route element={<NotFoundPage />} /> */}
      </Routes>
    </Container>
  );
}
