import { useState, useEffect } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import * as moviedbAPI from '../services/themoviedb-api';
import PageHeading from 'components/PageHeading';
import styled from 'styled-components';
import { BASE_URL_PICTURE } from 'constatnts/urlPicture';

const Section = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`;

const InfoContainer = styled.div`
  margin-left: 10px;
`;

export default function MovieDetailsPage() {
  const [detailsMovies, setDetailsMovies] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    moviedbAPI.fetchMovieDetails(movieId).then(setDetailsMovies);
  }, [movieId]);

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      {detailsMovies && (
        <main>
          <button type="button" onClick={handleClick}>
            Go back
          </button>
          <PageHeading>{`${detailsMovies.original_title}`}</PageHeading>
          <Section>
            <img
              src={`${BASE_URL_PICTURE}${detailsMovies.poster_path}`}
              alt={detailsMovies.original_title}
            />
            <InfoContainer>
              <h2>Overview</h2>
              <p>{detailsMovies.overview}</p>
              <h3>Vote</h3>
              <p>{detailsMovies.vote_average}</p>
              <h3>Genres</h3>
              <p>{detailsMovies.genres.map(({ name }) => `${name} `)}</p>
            </InfoContainer>
          </Section>
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
