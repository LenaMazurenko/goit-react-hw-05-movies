import { Routes, Route } from 'react-router-dom';

import Container from './components/Container/Container';
import AppNav from './components/AppNav/AppNav';

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
export default function App() {
  return (
    <Container>
      <AppNav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
}
