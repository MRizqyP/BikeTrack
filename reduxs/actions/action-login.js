import * as types from './action-types';

export function RETRIEVE_TOKEN() {
  return {
    type: types.RETRIEVE_TOKEN,
  };
}
export function LOGIN_REQ(payload) {
  return {
    type: types.LOGIN_REQ,
    payload: payload,
  };
}

export function LOGIN(payload) {
  return {
    type: types.LOGIN,
    payload: payload,
  };
}

export function LOGOUT() {
  return {
    type: types.LOGOUT,
  };
}
