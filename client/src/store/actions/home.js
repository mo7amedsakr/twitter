import actionTypes from '../actionTypes';

export const fetchTweetsStart = (url) => {
  return { type: actionTypes.FETCH_TWEETS_START, url };
};

export const fetchTweetsSuccess = (tweets) => {
  return { type: actionTypes.FETCH_TWEETS_SUCCESS, tweets };
};

export const fetchTweetsFaild = (error) => {
  return { type: actionTypes.FETCH_TWEETS_FAILD, error };
};

export const sendTweetStart = (data) => {
  if (data.content.trim() === '' && !data.image) {
    return {
      type: actionTypes.SEND_TWEET_FAILD,
      error: { message: 'You can not post empty tweet.' },
    };
  }

  const tweet = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (value) {
      tweet.append(key, value);
    }
  });

  return { type: actionTypes.SEND_TWEET_START, tweet };
};

export const sendTweetSuccess = (tweet) => {
  return { type: actionTypes.SEND_TWEET_SUCCSESS, tweet };
};

export const sendTweetFaild = (error) => {
  return { type: actionTypes.SEND_TWEET_FAILD, error };
};
