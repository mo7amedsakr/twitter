import axios from '../../axios';
import { put } from 'redux-saga/effects';

import * as actions from '../actions/auth';

export function* authInitSage() {
  try {
    const res = yield axios.get('/users/me');
    yield put(actions.authUserSuccess(res.data.data));
  } catch (error) {
    yield put(actions.authUserFaild(error.response.data));
  }
}

export function* authUserSage(action) {
  try {
    const res = yield axios.post(`/users${action.url}`, action.data);
    yield put(actions.authUserSuccess(res.data.data));
  } catch (error) {
    yield put(actions.authUserFaild(error.response.data));
  }
}

export function* updateUserSage(action) {
  try {
    const res = yield axios.post('/users/updateMe', action.data);
    yield put(actions.authUserSuccess(res.data.data));
  } catch (error) {
    yield put(actions.authUserFaild(error.response.data));
  }
}
