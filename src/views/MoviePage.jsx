import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import * as moviedbAPI from '../services/themoviedb-api';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

export default function SearchMovies() {
  const [movie, setMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const initialValues = {
    name: '',
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Must be longer than 2 characters')
      .required('Required'),
  });

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
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <Field
            name="name"
            type="text"
            placeholder="Enter a film title"
          ></Field>
          <ErrorMessage name="name" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
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
