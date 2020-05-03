import actionTypes from '../actionTypes';

const initState = {
  tweets: null,
  tweetSent: false,
  error: null,
  isLoading: true,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TWEETS_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_TWEETS_SUCCESS:
      return { ...state, tweets: action.tweets, error: null, isLoading: false };
    case actionTypes.FETCH_TWEETS_FAILD:
      return { ...state, error: action.error, isLoading: false };

    case actionTypes.SEND_TWEET_START:
      return { ...state, tweetSent: false };
    case actionTypes.SEND_TWEET_SUCCSESS:
      return {
        ...state,
        tweets: [action.tweet, ...state.tweets],
        tweetSent: true,
      };
    case actionTypes.SEND_TWEET_FAILD:
      return { ...state, tweetSent: false, error: action.error.response };

    default:
      return state;
  }
};

export default reducer;
