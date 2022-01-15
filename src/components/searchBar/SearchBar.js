import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, Form, SubmitBtn, Input } from './SearchBar.styled';
import { MdImageSearch } from 'react-icons/md';
import { fetchMovieByName } from '../../utils/fetchQuery';

export default function Searchbar() {
  const [query, setQuery] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (query)
      fetchMovieByName(query).then(resp => setResult([...resp.results]));
  }, [query]);

  //=================================
  const handlerFormSubmit = e => {
    e.preventDefault();
    setQuery(e.target.query.value.trim());
  };

  return (
    <>
      <Header>
        <Form onSubmit={handlerFormSubmit}>
          <Input name="query" placeholder="Search movie" />
          <SubmitBtn type="submit">
            <MdImageSearch fontSize="2em" />
          </SubmitBtn>
        </Form>
      </Header>

      {result && (
        <ul>
          {result.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
