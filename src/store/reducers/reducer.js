import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {};

const initAction = (state, action) => {
  return updateObject(state, {});
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACTION:
      return initAction(state, action);
    default:
      return state;
  }
};

export default reducer;
