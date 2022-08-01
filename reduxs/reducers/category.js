import * as types from '../actions/action-types';

const initialState = {
  isLoading: true,
  category: null,
  isError: null,
};

export default function categoryReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
        isLoading: false,
        isError: action.error,
      };

    default:
      return state;
  }
}
