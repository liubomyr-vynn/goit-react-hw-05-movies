import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewsInformation = () => {
  const [reviewList, setReviewList] = useState('');

  const params = useParams();

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${params.movieId}/reviews`,
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
        // console.log(response.data);
        setReviewList(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [params.movieId]);

  return (
    <div>
      {reviewList.length > 0 && (
        <ul>
          {reviewList.map(review => (
            <li key={review.id}>
              <h2>Author: {review.author_details.username}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviewList.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};
export default ReviewsInformation;
