import actionTypes from '../actionTypes';

let initState = {
  mode: 'LIGHT_MODE',
  color: 'blue'
};

if (localStorage.getItem('mode')) {
  initState = {
    ...initState,
    mode: localStorage.getItem('mode')
  };
}
if (localStorage.getItem('color')) {
  initState = {
    ...initState,
    color: localStorage.getItem('color')
  };
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_MODE:
      return {
        ...state,
        mode: action.mode
      };
    case actionTypes.CHANGE_COLOR:
      return {
        ...state,
        color: action.color
      };
    default:
      return state;
  }
};

export default reducer;
