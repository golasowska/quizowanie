import { combineReducers } from 'redux';

import questionReducer from './questionReducer';
import scoreReducer from './scoreReducer';


const rootReducer = combineReducers({
  question: questionReducer,
  score: scoreReducer
});

export default rootReducer;
