// import axios from '../../axios';
import axios from 'axios';
import { put } from 'redux-saga/effects';

import * as actions from '../actions/auth';

export function* authInitSage() {
  try {
    const res = yield axios.get('http://127.0.0.1:4000/api/v1/users/me', {
      withCredentials: true,
    });
    yield put(actions.authUserSuccess(res.data.data));
  } catch (error) {
    yield put(actions.authUserFaild(error.response.data));
  }
}

export function* authUserSage(action) {
  try {
    const res = yield axios.post(
      `http://127.0.0.1:4000/api/v1/users${action.url}`,
      action.data,
      { withCredentials: true }
    );
    console.log(res.data.data);
    yield put(actions.authUserSuccess(res.data.data));
  } catch (error) {
    yield put(actions.authUserFaild(error.response.data));
  }
}
