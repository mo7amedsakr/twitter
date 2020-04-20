import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweetsStart } from '../../../store/actions/home';
import { Tweet } from '../../../components/Tweet/Tweet';
import { Spinner } from '../../../components/UI/Spinner/Spinner';

export const Tweets = () => {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.home.tweets);
  // const error = useSelector((state) => state.home.error);
  const getTweets = useCallback(() => dispatch(fetchTweetsStart()), [dispatch]);

  useEffect(() => {
    getTweets();
  }, [getTweets]);

  return (
    <>
      {tweets ? (
        tweets.map((tweet) => (
          <Tweet
            key={tweet._id}
            profile={`http://127.0.0.1:4000/img/users/${tweet.user.photo}`}
            name={tweet.user.name}
            username={tweet.user.username}
            img={
              tweet.image &&
              `http://127.0.0.1:4000/img/tweets/${tweet.image}?size=small`
            }
            color={tweet.color}
          >
            {tweet.content}
          </Tweet>
        ))
      ) : (
        <Spinner />
      )}
    </>
  );
};
