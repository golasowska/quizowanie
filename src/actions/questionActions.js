import axios from 'axios';

import * as types from './actionTypes';


function setQuestion(data) {
  return {
    type: types.QUESTION,
    payload: data
  };
}

export function getQuestion(){
  return dispatch => {
    const apiURL = `https://qriusity.com/v1/questions/${Math.floor(Math.random() * 10000)}`;
    const request = axios.get(apiURL);

    request.then(
      res => {
        dispatch(setQuestion(res.data));
      }
    ).catch(
      err => {
        console.log(err)
      }
    );
  };
}
