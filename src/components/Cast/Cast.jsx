import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Loader from '../../components/Loader/Loader';

import placeholderImage from '../../images/actor.jpg';
import { ActorName, CastItem, CastItemImage, CastList } from './Cast.styled';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const [loading, setLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    setLoading(true);
    const FetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${params.movieId}/credits`,
          {
            params: { language: 'en-US' },
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmQ0ODE5YjFkMzFjMGU5YzVmY2Q0YWUxN2NlYzBiMiIsInN1YiI6IjY0NzA2NjEwNzcwNzAwMDEzNjdlZmY4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BH5Ex4koF22N6gg0mj72NBJQ7EPqMZd2hU1unPYNLqA',
            },
          }
        );
        setCastList(response.data.cast);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    FetchCast();
  }, [params.movieId]);

  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     url: `https://api.themoviedb.org/3/movie/${params.movieId}/credits`,
  // params: { language: 'en-US' },
  // headers: {
  //   accept: 'application/json',
  //   Authorization:
  //     'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmQ0ODE5YjFkMzFjMGU5YzVmY2Q0YWUxN2NlYzBiMiIsInN1YiI6IjY0NzA2NjEwNzcwNzAwMDEzNjdlZmY4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BH5Ex4koF22N6gg0mj72NBJQ7EPqMZd2hU1unPYNLqA',
  // },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       setCastList(response.data.cast);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, [params.movieId]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <CastList>
          {castList.map(actor => (
            <CastItem key={actor.id}>
              <CastItemImage
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    : placeholderImage
                }
                alt={actor.name}
              />
              <ActorName>{actor.name}</ActorName>
            </CastItem>
          ))}
        </CastList>
      )}
      {!loading && castList.length === 0 && (
        <p>We don't have any cast for this movie.</p>
      )}
    </div>
  );
};

export default Cast;
