import * as types from "../actions/action-types";

const initialState = {
  roleName: "Guest",
  userId: "123123",
  isError: null,
  isLoggedin: false,
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.AUTH_USER_SUCCESS:
      return {
        ...state,
        roleName: action.payload.role.name,
        userId: action.payload.userId,
        isError: null,
        isLoggedin: true,
      };
    case types.AUTH_LOGOUT:
      return {
        ...state,
        roleName: null,
        userId: null,
        isError: null,
        isLoggedin: false,
      };
    default:
      return state;
  }
}
