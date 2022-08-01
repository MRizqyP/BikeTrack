import * as types from './action-types';

export function AUTH_LOGOUT() {
  return {
    type: types.AUTH_LOGOUT,
  };
}
export function AUTH_USER_SUCCESS(payload) {
  return {
    type: types.AUTH_USER_SUCCESS,
    payload: payload,
  };
}
