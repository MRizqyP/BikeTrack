import * as types from './action-types';

export function GET_CUSTOMER(payload) {
  return {
    type: types.GET_CUSTOMER,
    payload: payload,
  };
}
export function SET_CUSTOMER(payload) {
  return {
    type: types.SET_CUSTOMER,
    payload: payload,
  };
}
