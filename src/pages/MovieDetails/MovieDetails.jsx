import axios from 'axios';
import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  AdditionalInfo,
  AdditionalList,
  BackLink,
  MainInfo,
  MainInfoContainer,
  MovieDetailsContainer,
  StyledLink,
} from './MovieDetails.styled';
import Loader from '../../components/Loader/Loader';

import placeholderImage from '../../images/poster.jpg';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [poster, setPoster] = useState('');
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setLoading(true);
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${params.movieId}`,
          {
            params: { language: 'en-US' },
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmQ0ODE5YjFkMzFjMGU5YzVmY2Q0YWUxN2NlYzBiMiIsInN1YiI6IjY0NzA2NjEwNzcwNzAwMDEzNjdlZmY4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BH5Ex4koF22N6gg0mj72NBJQ7EPqMZd2hU1unPYNLqA',
            },
          }
        );

        setMovie(response.data);
        setGenres(response.data.genres);

        if (response.data.poster_path) {
          setPoster(
            `https://image.tmdb.org/t/p/w300${response.data.poster_path}`
          );
        } else {
          setPoster(placeholderImage);
        }

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [params.movieId]);

  return (
    <MovieDetailsContainer>
      <BackLink
        to={backLinkLocationRef.current}
        style={{ textDecoration: 'none' }}
      >
        Return
      </BackLink>

      <MainInfo>
        {loading ? (
          <Loader />
        ) : (
          <img
            src={poster ? poster : placeholderImage}
            alt={movie.original_title}
            style={{ maxHeight: 450, maxWidth: 300 }}
          />
        )}
        <MainInfoContainer>
          <h2>{movie.original_title}</h2>
          <p>User score: {parseInt(`${movie.vote_average * 10}`)}%</p>
          <h3>Overview:</h3>
          <p>{movie.overview}</p>
          <h3>Genres:</h3>
          <ul>
            {genres.length !== 0 ? (
              genres.map(genre => <li key={genre.id}>{genre.name}</li>)
            ) : (
              <p>We don't have any genres for this movie.</p>
            )}
          </ul>
        </MainInfoContainer>
      </MainInfo>
      <AdditionalInfo>
        <h3>Additional information:</h3>
        <AdditionalList>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </AdditionalList>
      </AdditionalInfo>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </MovieDetailsContainer>
  );
};
export default MovieDetails;
