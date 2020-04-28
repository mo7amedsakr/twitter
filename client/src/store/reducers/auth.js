import actionTypes from '../actionTypes';

const initState = {
  user: null,
  error: null,
  isLoading: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_INIT_START:
      return { ...state, isLoading: true };

    case actionTypes.AUTH_USER_SUCCESS:
      return { user: action.user, error: null, isLoading: false };
    case actionTypes.AUTH_USER_FAILD:
      return { user: null, error: action.error, isLoading: false };

    case actionTypes.UPDATE_USER_SUCCESS:
      return { ...state, user: action.user };
    case actionTypes.UPDATE_USER_FAILD:
      return { ...state, error: action.error };

    default:
      return state;
  }
};

export default reducer;
