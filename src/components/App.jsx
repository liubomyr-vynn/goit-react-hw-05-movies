import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './Layout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const CastInformation = lazy(() => import('../components/CastInformation'));
const ReviewsInformation = lazy(() =>
  import('../components/ReviewsInformation')
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<CastInformation />} />
          <Route path="reviews" element={<ReviewsInformation />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
