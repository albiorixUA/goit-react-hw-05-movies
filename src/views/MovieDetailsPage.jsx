import { useState, useEffect } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import * as moviedbAPI from '../services/themoviedb-api';
import MovieDetailsElement from './MovieDetailsElement';

export default function MovieDetailsPage() {
  const [detailsMovies, setDetailsMovies] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    moviedbAPI.fetchMovieDetails(movieId).then(setDetailsMovies);
  }, [movieId]);

  return (
    <>
      {detailsMovies && (
        <main>
          {
            <MovieDetailsElement
              onClick={() => navigate('/')}
              movie={detailsMovies}
            />
          }
          <p>Additional information</p>
          <Link to="cast">Cast</Link>
          <br />
          <Link to="reviews">Reviews</Link>
        </main>
      )}
      <Outlet />
    </>
  );
}
