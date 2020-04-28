import { takeEvery, takeLeading } from 'redux-saga/effects';
import actionTypes from '../actionTypes';

import { getTweetsSaga, sendTweetSaga } from './home';
import { authInitSage, authUserSage, updateUserSage } from './auth';

export function* watchHome() {
  yield takeEvery(actionTypes.FETCH_TWEETS_START, getTweetsSaga);
  yield takeLeading(actionTypes.SEND_TWEET_START, sendTweetSaga);
}

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_USER_START, authUserSage);
  yield takeEvery(actionTypes.AUTH_INIT_START, authInitSage);
  yield takeLeading(actionTypes.UPDATE_USER_START, updateUserSage);
}
