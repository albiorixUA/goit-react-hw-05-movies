import { Route, Routes } from 'react-router-dom';
import Appbar from './AppBar';
import Container from './Container';
import HomePage from '../views/HomePage';
import MovieDetailsPage from 'views/MovieDetailsPage';

export default function App() {
  return (
    <Container>
      <Appbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Container>
  );
}
