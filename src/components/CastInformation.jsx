import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const CastInformation = () => {
  const [castList, setCastList] = useState([]);

  const params = useParams();

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${params.movieId}/credits`,
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
        setCastList(response.data.cast);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [params.movieId]);

  return (
    <div>
      <h2>Cast Information</h2>
      {castList.length > 0 && (
        <ul>
          {castList.map(actor => (
            <li key={actor.id}>
              {actor.profile_path !== null && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                />
              )}
              <p>{actor.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CastInformation;
