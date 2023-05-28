import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [poster, setPoster] = useState('');
  const [genres, setGenres] = useState([]);
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${params.movieId}`,
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmQ0ODE5YjFkMzFjMGU5YzVmY2Q0YWUxN2NlYzBiMiIsInN1YiI6IjY0NzA2NjEwNzcwNzAwMDEzNjdlZmY4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BH5Ex4koF22N6gg0mj72NBJQ7EPqMZd2hU1unPYNLqA',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovie(response.data);
        setGenres(response.data.genres);

        if (response.data.poster_path) {
          setPoster(
            `https://image.tmdb.org/t/p/w300${response.data.poster_path}`
          );
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [params.movieId]);

  return (
    <div>
      <Link to={location.state?.from ?? '/'}>Return</Link>
      <h2>{movie.original_title}</h2>
      {poster && <img src={poster} alt={movie.original_title} />}
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <ul>
        {genres !== [] &&
          genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
      </ul>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default MovieDetails;