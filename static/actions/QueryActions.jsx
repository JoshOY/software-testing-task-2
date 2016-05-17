// ===========================
// 账户相关actions

import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';
import Config  from '../appConfig';
import { message } from 'antd';
import * as PersistActions from './PersistActions.jsx';

export const actQueryInfo = (token) => dispatch => {
  fetch(Config.baseUrl + '/info', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token
    })
  }).then(
    resp => resp.json()
  ).then(respObj => {
    let queryData = Object.assign({}, respObj);
    dispatch(actQueryInfoResolve(queryData));
  });
};

export const actQueryInfoResolve = (queryData) => {
  return {
    type: 'QUERY__QUERY_INFO_RESOLVE',
    queryData
  }
};

