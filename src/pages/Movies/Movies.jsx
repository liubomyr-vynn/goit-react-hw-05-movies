import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import axios from 'axios';

import {
  ItemLink,
  MoviesButton,
  MoviesContainer,
  MoviesForm,
  MoviesInput,
  MoviesList,
} from './Movies.styled';

import Loader from '../../components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(false);
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
    const FetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/search/movie',
          {
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
          }
        );

        setMoviesList(response.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    FetchMovies();
  }, [inputValue]);

  const handleSearch = e => {
    setLoading(true);
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
      {loading ? (
        <Loader />
      ) : (
        <MoviesList>
          {moviesList.map(movie => (
            <li key={movie.id}>
              <ItemLink to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </ItemLink>
            </li>
          ))}
        </MoviesList>
      )}
      {!loading && moviesList.length === 0 && inputValue !== '' && (
        <p>We don't have any movies for this query.</p>
      )}
    </MoviesContainer>
  );
};

export default Movies;
