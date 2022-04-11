import { useState, useEffect } from 'react';
import * as moviedbAPI from '../services/themoviedb-api';

export default function Reviews({ id }) {
  const [review, setReview] = useState(null);

  useEffect(() => {
    moviedbAPI.fetchMoviesReviews(id).then(({ results }) => setReview(results));
  }, [id]);

  return (
    <>
      {review && review.length > 0 ? (
        <ul>
          {review.map(el => {
            const { id, author, content } = el;
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
}
