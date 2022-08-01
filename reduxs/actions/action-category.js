import * as types from './action-types';

export function GET_CATEGORY(payload) {
  return {
    type: types.GET_CATEGORY,
    payload: payload,
  };
}
export function SET_CATEGORY(payload) {
  return {
    type: types.SET_CATEGORY,
    payload: payload,
  };
}
