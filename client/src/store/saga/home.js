import axios from '../../axios';
import { put } from 'redux-saga/effects';
import * as actions from '../actions/home';

export function* getTweetsSaga(action) {
  try {
    const res = yield axios.get(action.url);
    yield put(actions.fetchTweetsSuccess(res.data.data));
  } catch (error) {
    yield put(actions.fetchTweetsFaild(error.response.data));
  }
}

export function* sendTweetSaga(action) {
  try {
    const res = yield axios.post('/tweets', action.tweet);
    yield put(actions.sendTweetSuccess(res.data.data));
  } catch (error) {
    yield put(actions.sendTweetFaild(error.response.data));
  }
}
