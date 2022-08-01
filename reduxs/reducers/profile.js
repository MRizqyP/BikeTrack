import * as types from '../actions/action-types';

const initialState = {
  isLoading: true,
  user: null,
  isError: null,
};

export default function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_USER_PROFILE:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isError: action.error,
      };

    default:
      return state;
  }
}
