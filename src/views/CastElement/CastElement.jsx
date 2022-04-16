import { BASE_URL_PICTURE, DEFAUL_FOTO } from 'constatnts/urlPicture';
import { CreditsPicture } from './Cast.styled';

export default function CastElement({ cast }) {
  return (
    <ul>
      {cast.map(el => {
        const { id, profile_path, original_name, character } = el;
        return (
          <li key={id}>
            <CreditsPicture
              src={
                profile_path !== null
                  ? `${BASE_URL_PICTURE}${profile_path}`
                  : DEFAUL_FOTO
              }
              alt={original_name}
            />
            <p>{original_name}</p>
            <p> Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
}
