import { useState, useEffect } from 'react';
import * as moviedbAPI from '../services/themoviedb-api';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CreditsPicture = styled.img`
  height: 10%;
  width: 10%;
`;

export default function Cast({ id }) {
  const [credits, setCredits] = useState(null);

  const BASEURLPICTURE = 'https://image.tmdb.org/t/p/original';
  const defaultFoto =
    'https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar-300x300.png';

  useEffect(() => {
    moviedbAPI.fetchMovieCredits(id).then(setCredits);
  }, [id]);

  return (
    <>
      {credits && (
        <ul>
          {credits.cast.map(el => {
            const { id, profile_path, original_name, character } = el;

            return (
              <li key={id}>
                <CreditsPicture
                  src={
                    profile_path !== null
                      ? `${BASEURLPICTURE}${profile_path}`
                      : defaultFoto
                  }
                  alt={original_name}
                />
                <p>{original_name}</p>
                <p> Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

Cast.propTypes = {
  id: PropTypes.string.isRequired,
};
