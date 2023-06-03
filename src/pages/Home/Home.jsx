import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { HomeContainer, HomeList, HomeTitle } from './Home.styled';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/trending/movie/day',
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
        setTrending(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <HomeContainer>
      <HomeTitle>Trending movies:</HomeTitle>
      <HomeList>
        {trending.map(dataItem => {
          return (
            <li key={dataItem.id}>
              <Link to={`/movies/${dataItem.id}`} state={{ from: location }}>
                {dataItem.title}
              </Link>
            </li>
          );
        })}
      </HomeList>
    </HomeContainer>
  );
};
export default Home;
