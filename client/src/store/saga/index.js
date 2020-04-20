import { takeEvery, takeLeading } from 'redux-saga/effects';
import actionTypes from '../actionTypes';

import { getTweetsSaga, sendTweetSaga } from './home';
import { authInitSage, authUserSage } from './auth';

export function* watchHome() {
  yield takeEvery(actionTypes.FETCH_TWEETS_START, getTweetsSaga);
  yield takeLeading(actionTypes.SEND_TWEET_START, sendTweetSaga);
}

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_USER_START, authUserSage);
  yield takeEvery(actionTypes.AUTH_INIT_START, authInitSage);
}
