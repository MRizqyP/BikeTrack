import * as types from '../actions/action-types';

const initialState = {
  isLoading: true,
  customer: null,
  isError: null,
};

export default function customerReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_CUSTOMER:
      return {
        ...state,
        customer: action.payload,
        isLoading: false,
        isError: action.error,
      };

    default:
      return state;
  }
}
