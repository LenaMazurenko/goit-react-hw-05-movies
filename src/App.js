import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import Loader from 'react-loader-spinner';
import { LoaderWrapper } from './components/Container/Container.styled';

import Container from './components/Container/Container';
import AppNav from './components/AppNav/AppNav';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "movie-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page-" */
  ),
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage' /* webpackChunkName: "notfound-page" */),
);

export default function App() {
  return (
    <Container>
      <AppNav />

      <Suspense
        fallback={
          <LoaderWrapper>
            <Loader type="Oval" color="#00BFFF" height={200} width={200} />
          </LoaderWrapper>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
