import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Layout from './Layout';
import CastInformation from './CastInformation';
import ReviewsInformation from './ReviewsInformation';

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
