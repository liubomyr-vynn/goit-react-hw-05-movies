import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../../components/Loader/Loader';
import { ReviewItem, ReviewList } from './Reviews.styled';

const Reviews = () => {
  const [reviewList, setReviewList] = useState([]);
  const [loading, setLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    setLoading(true);
    const FetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${params.movieId}/reviews`,
          {
            params: { language: 'en-US' },
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmQ0ODE5YjFkMzFjMGU5YzVmY2Q0YWUxN2NlYzBiMiIsInN1YiI6IjY0NzA2NjEwNzcwNzAwMDEzNjdlZmY4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BH5Ex4koF22N6gg0mj72NBJQ7EPqMZd2hU1unPYNLqA',
            },
          }
        );
        setReviewList(response.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    FetchReviews();
  }, [params.movieId]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <ReviewList>
          {reviewList.map(review => (
            <ReviewItem key={review.id}>
              <h2>{review.author_details.username}</h2>
              <p>{review.content}</p>
            </ReviewItem>
          ))}
        </ReviewList>
      )}
      {!loading && reviewList.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};
export default Reviews;
