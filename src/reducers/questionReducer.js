import * as types from '../actions/actionTypes';

export default function questionReducer(state = {}, action) {
  switch (action.type) {
    case types.QUESTION:
      return Object.assign({},
        state, {
          question: action.payload
        }
      );
    default:
      return state;
    }
}
