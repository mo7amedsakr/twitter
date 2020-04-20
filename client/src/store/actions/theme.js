import actionTypes from '../actionTypes';

export const modeChange = (mode) => {
  localStorage.setItem('mode', mode);
  return { type: actionTypes.CHANGE_MODE, mode: mode };
};

export const colorChange = (color) => {
  localStorage.setItem('color', color);
  return { type: actionTypes.CHANGE_COLOR, color: color };
};
