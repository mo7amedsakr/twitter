import actionTypes from '../actionTypes';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';

export const authInitStart = () => {
  return { type: actionTypes.AUTH_INIT_START };
};

export const authUserStart = (url, data) => {
  if (!isEmail(data.email) || !isLength(data.password, { min: 8 })) {
    return {
      type: actionTypes.AUTH_USER_FAILD,
      error: { message: 'Try again with a valid values.' },
    };
  }

  if (data.username && data.username.replace(/\s/g, '') === '') {
    return {
      type: actionTypes.AUTH_USER_FAILD,
      error: { message: 'Username can not be empty.' },
    };
  }

  if (data.passwordConfirm && data.passwordConfirm !== data.password) {
    return {
      type: actionTypes.AUTH_USER_FAILD,
      error: { message: 'Passwords does not match.' },
    };
  }

  return { type: actionTypes.AUTH_USER_START, url, data };
};
export const authUserSuccess = (user) => {
  return { type: actionTypes.AUTH_USER_SUCCESS, user };
};
export const authUserFaild = (error) => {
  return { type: actionTypes.AUTH_USER_FAILD, error };
};

export const updateUserStart = (data) => {
  const updatedData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value) {
      updatedData.append(key, value);
    }
  });

  if (updatedData.entries().next().done) {
    return {
      type: actionTypes.UPDATE_USER_FAILD,
      error: { message: 'You never changed.' },
    };
  }

  return { type: actionTypes.UPDATE_USER_START, data: updatedData };
};
export const updateUserSuccess = (user) => {
  return { type: actionTypes.UPDATE_USER_SUCCESS, user };
};
export const updateUserFaild = (error) => {
  return { type: actionTypes.UPDATE_USER_FAILD, error };
};

export const logoutStart = () => {
  return { type: actionTypes.LOGOUT_START };
};

export const logoutSuccess = () => {
  return { type: actionTypes.lOGOUT_SUCCESS };
};

export const logoutFaild = (error) => {
  return { type: actionTypes.LOGOUT_FAILD, error };
};
