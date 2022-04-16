import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import * as moviedbAPI from '../services/themoviedb-api';
import SearchMoviesForm from './SearchMoviesForm';

export default function SearchMovies() {
  const [movie, setMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const handleSubmit = (values, { resetForm }) => {
    const inputValue = Object.values(values);
    setSearchParams({ query: inputValue });
    resetForm();
  };

  useEffect(() => {
    if (searchQuery === null) {
      return;
    }
    moviedbAPI
      .fetchSearchMovies(searchQuery)
      .then(({ results }) => setMovie(results));
  }, [searchQuery]);

  return (
    <div>
      {<SearchMoviesForm onSubmit={handleSubmit} />}
      {movie && (
        <ul>
          {movie.map(m => (
            <li key={m.id}>
              <Link to={`${m.id}`}> {m.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
