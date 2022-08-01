import * as types from './action-types';

export function GET_USER_PROFILE(payload) {
  return {
    type: types.GET_USER_PROFILE,
    payload: payload,
  };
}
export function SET_USER_PROFILE(payload) {
  return {
    type: types.SET_USER_PROFILE,
    payload: payload,
  };
}
