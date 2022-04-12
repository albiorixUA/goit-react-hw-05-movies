import { Route, Routes } from 'react-router-dom';
import Appbar from './AppBar';
import Container from './Container';
import { lazy, Suspense } from 'react';

const HomePage = lazy(
  () => import('../views/HomePage') /* webpackChunkName: "home-page" */
);
const MovieDetailsPage = lazy(
  () =>
    import(
      'views/MovieDetailsPage'
    ) /* webpackChunkName: "movie-details-page" */
);
const SearchMovies = lazy(
  () => import('views/MoviePage') /* webpackChunkName: "search-movies */
);

export default function App() {
  return (
    <Container fallback={<div>Loading...</div>}>
      <Appbar />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<SearchMovies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
