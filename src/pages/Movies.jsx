import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Movies = () => {
  const [, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const location = useLocation();

  const handleSearch = e => {
    e.preventDefault();
    setSearchParams({ name: inputValue });
    fetchMovies(inputValue);
  };

  const fetchMovies = name => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        query: name,
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
        console.log(response.data);
        setMoviesList(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const updateQueryString = e => {
    setInputValue(e.target.value);
  };

  console.log(location);

  return (
    <div className="Searchbar">
      <form onSubmit={handleSearch} className="SearchForm">
        <label className="SearchForm-button-label" htmlFor="id-1"></label>
        <input
          onChange={updateQueryString}
          value={inputValue}
          type="text"
          placeholder="Search movies"
          autoComplete="off"
          autoFocus
          name="search"
          className="SearchForm-input"
          id="id-1"
        />
        <button type="submit" className="SearchForm-button">
          Search
        </button>
      </form>
      {moviesList.length > 0 && (
        <ul>
          {moviesList.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;

// import { useSearchParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// import axios from 'axios';

// const Movies = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [inputValue, setInputValue] = useState('');

//   const [moviesList, setMoviesList] = useState([]);
//   const name = searchParams.get('name') ?? '';

//   useEffect(() => {
//     const options = {
//       method: 'GET',
//       url: 'https://api.themoviedb.org/3/search/movie',
//       params: {
//         query: { inputValue },
//         include_adult: 'false',
//         language: 'en-US',
//         page: '1',
//       },
//       headers: {
//         accept: 'application/json',
//         Authorization:
//           'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmQ0ODE5YjFkMzFjMGU5YzVmY2Q0YWUxN2NlYzBiMiIsInN1YiI6IjY0NzA2NjEwNzcwNzAwMDEzNjdlZmY4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BH5Ex4koF22N6gg0mj72NBJQ7EPqMZd2hU1unPYNLqA',
//       },
//     };

//     axios
//       .request(options)
//       .then(function (response) {
//         console.log(response.data);
//         setMoviesList(response.data.results);
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//   }, [inputValue]);

//   const updateQueryString = e => {
//     if (e.target.value === '') {
//       return setSearchParams({});
//     }
//     setSearchParams({ name: e.target.value });
//   };

//   const handleSearch = e => {
//     setInputValue({ name: e.target.value });
//   };

//   // const handleInput = event => {
//   //   setInputValue(event.target.value);
//   // };

//   // const handleSubmit = event => {
//   // event.preventDefault();
//   // if (inputValue === '') {
//   //   Report.info('Enter a search query!', '', 'Ok');
//   // }
//   // onFormSubmit(inputValue);
//   // setInputValue('');
//   // };

//   return (
//     <div className="Searchbar">
//       <form onSubmit={handleSearch} className="SearchForm">
//         <label className="SearchForm-button-label" htmlFor="id-1"></label>
//         <input
//           onChange={updateQueryString}
//           value={name}
//           type="text"
//           placeholder="Search movies"
//           autoComplete="off"
//           autoFocus
//           name="search"
//           className="SearchForm-input"
//           id="id-1"
//         />
//         <button type="submit" className="SearchForm-button">
//           Search
//         </button>
//       </form>
//     </div>
//   );
// };
// export default Movies;

// <div>
//   <input type="text" value={name} onChange={updateQueryString} />
//   <button type="button" onClick={handleSearch}>
//     Search
//   </button>
//   {/* <div>Movies page</div> */}
// </div>;
