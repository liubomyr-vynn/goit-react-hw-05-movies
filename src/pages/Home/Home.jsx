import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import {
  HomeContainer,
  HomeList,
  HomeTitle,
  ItemLink,
  ListItem,
} from './Home.styled';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const FetchHome = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/day',
          {
            params: { language: 'en-US' },
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmQ0ODE5YjFkMzFjMGU5YzVmY2Q0YWUxN2NlYzBiMiIsInN1YiI6IjY0NzA2NjEwNzcwNzAwMDEzNjdlZmY4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BH5Ex4koF22N6gg0mj72NBJQ7EPqMZd2hU1unPYNLqA',
            },
          }
        );
        setTrending(response.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    FetchHome();
  }, []);

  return (
    <HomeContainer>
      <HomeTitle>Trending movies:</HomeTitle>
      {loading ? (
        <Loader />
      ) : (
        <HomeList>
          {trending.map(dataItem => {
            return (
              <ListItem key={dataItem.id}>
                <ItemLink
                  to={`/movies/${dataItem.id}`}
                  state={{ from: location }}
                >
                  {dataItem.title}
                </ItemLink>
              </ListItem>
            );
          })}
        </HomeList>
      )}
    </HomeContainer>
  );
};
export default Home;
