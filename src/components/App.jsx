import { Route, Routes } from 'react-router-dom';
import Container from './Layout';
import { createAsyncView } from 'helpers';

const HomePage = createAsyncView('HomePage');
const SearchMovies = createAsyncView('SearchMovies');
const MovieDetailsPage = createAsyncView('MovieDetailsPage');
const Cast = createAsyncView('Cast');
const Reviews = createAsyncView('Reviews');

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<SearchMovies />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
