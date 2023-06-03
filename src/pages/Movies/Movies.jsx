import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import axios from 'axios';

import {
  MoviesButton,
  MoviesContainer,
  MoviesForm,
  MoviesInput,
  MoviesList,
} from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const location = useLocation();
  const name = searchParams.get('name') ?? '';

  const updateQueryString = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ name: e.target.value });
  };

  useEffect(() => {
    setInputValue(name);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        query: inputValue,
        include_adult: 'false',
        language: 'en-US',
        page: '1',
      },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmQ0ODE5YjFkMzFjMGU5YzVmY2Q0YWUxN2NlYzBiMiIsInN1YiI6IjY0NzA2NjEwNzcwNzAwMDEzNjdlZmY4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BH5Ex4koF22N6gg0mj72NBJQ7EPqMZd2hU1unPYNLqA',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMoviesList(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [inputValue]);

  const handleSearch = e => {
    e.preventDefault();
    setInputValue(name);
  };

  return (
    <MoviesContainer>
      <MoviesForm onSubmit={handleSearch}>
        <MoviesInput
          onChange={updateQueryString}
          value={name}
          type="text"
          placeholder="Search movies"
          autoComplete="off"
          autoFocus
          name="search"
          id="id-1"
        />
        <MoviesButton type="submit">
          <ImSearch style={{ width: 18, height: 18 }} />
        </MoviesButton>
      </MoviesForm>
      {moviesList.length > 0 && (
        <MoviesList>
          {moviesList.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </MoviesList>
      )}
    </MoviesContainer>
  );
};

export default Movies;
