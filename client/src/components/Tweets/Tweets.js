import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweetsStart } from '../../store/actions/tweets';
import { Tweet } from '../../components/Tweet/Tweet';
import { Spinner } from '../../components/UI/Spinner/Spinner';

export const Tweets = (props) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const tweets = useSelector((state) => state.tweets.tweets);
  const getTweets = useCallback(
    (page) => dispatch(fetchTweetsStart(props.url, page)),
    [dispatch, props.url]
  );

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    getTweets(page);
  }, [getTweets, page]);

  const scrollHandler = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  return (
    <div>
      {tweets ? (
        tweets.map((tweet) => (
          <Tweet
            key={tweet._id}
            profile={`/img/users/${tweet.user.photo.img}`}
            name={tweet.user.name}
            username={tweet.user.username}
            img={tweet.image && `/img/tweets/${tweet.image}?size=small`}
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
