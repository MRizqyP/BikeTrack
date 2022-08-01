import * as types from '../actions/action-types';
import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {delay} from 'redux-saga';
import jwt_decode from 'jwt-decode';
import {BASE_URL} from '../../services/api/base_url';

export function* handleGetCustomer(action) {
  try {
    const apiConfig = {
      method: 'get',
      url: `${BASE_URL}mobile/customer`,
      headers: {
        Authorization: 'Bearer ' + action.payload.token,
      },
    };

    const response = yield call(axios, apiConfig);
    if (response.data.statusCode === 200) {
      yield put({
        type: types.SET_CUSTOMER,
        payload: response.data.data.content,
      });
    }
  } catch (e) {
    console.log(e);
    // yield put({type: types.API_REQUEST_FAILED, payload: e.message});
  }
}

export const counterSagaCustomer = [
  takeEvery(types.GET_CUSTOMER, handleGetCustomer),
];

export default counterSagaCustomer;
