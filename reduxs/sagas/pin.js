import * as types from '../actions/action-types';
import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {delay} from 'redux-saga';
import {savePin} from '../../utils/storage';

export function* handlePIN(action) {
  try {
    savePin(action.payload.pin);
    yield put({type: types.SET_PIN, payload: action.payload});
  } catch (e) {
    console.log(e);
    // yield put({type: types.API_REQUEST_FAILED, payload: e.message});
  }
}

export const counterSagaPIN = [takeEvery(types.PIN_REQ, handlePIN)];

export default counterSagaPIN;
