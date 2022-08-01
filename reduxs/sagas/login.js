import * as types from '../actions/action-types'
import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { delay } from 'redux-saga'
// import jwt_decode from 'jwt-decode'
// import { BASE_URL } from '../../services/api/base_url'

export function* handleLogin(action) {
  // yield put({type: types.LOGIN});
  try {
    const apiConfig = {
      method: 'post',
      // url: `${BASE_URL}auth/login`,
      data: {
        email: action.payload.email,
        password: action.payload.password
      }
    }

    const response = yield call(axios, apiConfig)
    if (response.data.statusCode === 200) {
      yield put({ type: types.LOGIN, payload: response.data.data })
      // var decoded = jwt_decode(response.data.data.token)
      //
      yield put({ type: types.AUTH_USER_SUCCESS, payload: decoded })
    } else {
      yield put({ type: types.LOGIN_GAGAL, payload: response.data })
    }
  } catch (e) {
    console.log(e)
    yield put({ type: types.API_REQUEST_FAILED, payload: e.message })
  }
}

export const counterSagaToken = [takeEvery(types.LOGIN_REQ, handleLogin)]

export default counterSagaToken
