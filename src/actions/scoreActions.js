import axios from 'axios';

import * as types from './actionTypes';


export function scoreUp(){
  return {
    type: types.SCORE_UP
  };
}

export function scoreDown(){
  return {
    type: types.SCORE_DOWN
  };
}
