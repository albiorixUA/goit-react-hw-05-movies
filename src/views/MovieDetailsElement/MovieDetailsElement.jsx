import PageHeading from 'components/PageHeading';
import { Section, InfoContainer } from './MovieDetailsElement.styled';
import { BASE_URL_PICTURE } from 'constatnts/urlPicture';

export default function MovieDetailsElement({ movie, onClick }) {
  const { original_title, poster_path, overview, vote_average } = movie;
  return (
    <>
      <button type="button" onClick={onClick}>
        Go back
      </button>
      <PageHeading>{`${original_title}`}</PageHeading>
      <Section>
        <img src={`${BASE_URL_PICTURE}${poster_path}`} alt={original_title} />
        <InfoContainer>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Vote</h3>
          <p>{vote_average}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(({ name }) => `${name} `)}</p>
        </InfoContainer>
      </Section>
    </>
  );
}
