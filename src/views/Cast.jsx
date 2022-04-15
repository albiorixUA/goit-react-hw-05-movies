import { useState, useEffect } from 'react';
import * as moviedbAPI from '../services/themoviedb-api';
import { useParams } from 'react-router-dom';
import { CastElement } from './CastElement/CastElement';

export default function Cast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    moviedbAPI.fetchMovieCredits(movieId).then(setCredits);
  }, [movieId]);

  return <>{credits && <CastElement cast={credits.cast} />}</>;
}
