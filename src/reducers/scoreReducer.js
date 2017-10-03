import * as types from '../actions/actionTypes';

export default function scoreReducer(state = { score: 0 }, action) {
  switch (action.type) {
    case types.SCORE_UP:
      return Object.assign({},
        state, {
          score: state.score + 5
        }
      );
    case types.SCORE_DOWN:
      return Object.assign({},
        state, {
          score: state.score - 5
        }
      );
    default:
      return state;
    }
}
