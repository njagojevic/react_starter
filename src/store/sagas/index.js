import {takeEvery} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {actionSaga} from './sagas';

export function* watchAction() {
  yield takeEvery(actionTypes.ACTION, actionSaga);
}
