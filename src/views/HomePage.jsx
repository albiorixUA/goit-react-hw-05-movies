import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as moviedbAPI from '../services/themoviedb-api';
import PageHeading from 'components/PageHeading';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviedbAPI.fetchTrending().then(({ results }) => setMovies(results));
  }, []);

  return (
    <>
      <PageHeading>Trending today </PageHeading>
      {movies && (
        <ul>
          {movies.map(m => (
            <li key={m.id}>
              <Link to={`movies/${m.id}`}> {m.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
