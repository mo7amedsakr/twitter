import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweetsStart } from '../../store/actions/home';
import { Tweet } from '../../components/Tweet/Tweet';
import { Spinner } from '../../components/UI/Spinner/Spinner';

export const Tweets = (props) => {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.home.tweets);
  const isLoading = useSelector((state) => state.home.isLoading);
  // const error = useSelector((state) => state.home.error);
  const getTweets = useCallback(() => dispatch(fetchTweetsStart(props.url)), [
    dispatch,
    props.url,
  ]);

  useEffect(() => {
    getTweets();
  }, [getTweets]);

  return (
    <div>
      {tweets ? (
        tweets.map((tweet) => (
          <Tweet
            key={tweet._id}
            profile={`http://127.0.0.1:4000/img/users/${tweet.user.photo.img}`}
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
    </div>
  );
};
