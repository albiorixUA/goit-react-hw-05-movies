import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviedbAPI from '../services/themoviedb-api';
import PageHeading from 'components/PageHeading';

export default function MovieDetailsPage() {
  const [detailsMovies, setDetailsMovies] = useState(null);
  const { movieId } = useParams();

  const BASEURLPICTURE = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    moviedbAPI.fetchMovieDetails(movieId).then(setDetailsMovies);
  }, [movieId]);

  //   const { original_title, overview, vote_average, poster_patch } =
  //     detailsMovies;

  return (
    <>
      {detailsMovies && (
        <PageHeading text={`${detailsMovies.original_title}`} />
      )}
      {detailsMovies && (
        <img src={`${BASEURLPICTURE}${detailsMovies.poster_path}`} alt="" />
      )}
    </>
  );
}
