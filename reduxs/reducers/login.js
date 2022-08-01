import * as types from '../actions/action-types';

const initialState = {
  isLoading: true,
  userName: null,
  userToken: null,
  userEmail: null,
  isError: null,
  isLoggedin: false,
};

export default function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        userEmail: action.payload.email,
        userName: action.payload.username,
        userToken: action.payload.token,
        isLoading: false,
        isError: null,
        isLoggedin: true,
      };
    case types.LOGIN_GAGAL:
      return {
        ...state,
        userEmail: null,
        userName: null,
        userToken: null,
        isLoading: false,
        isError: action.payload.errorMessages,
        isLoggedin: false,
      };
    case types.LOGOUT:
      return {
        ...state,
        userEmail: null,
        userName: null,
        userToken: null,
        isLoading: false,
        isError: null,
        isLoggedin: false,
      };
    default:
      return state;
  }
}
