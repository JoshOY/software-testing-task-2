// ===========================
// 账户相关actions

import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';
import Config  from '../appConfig';
import { message } from 'antd';

export const actLogin = (username, password) => dispatch => {
  //dispatch(actLoginStart());
  fetch(Config.baseUrl + '/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then((resp) => {
    return resp.json();
  }).then((respObj) => {
    console.log('请求成功', respObj);
    if (respObj.success) {
      message.success(`登录成功, 欢迎回来!`, 5);
      dispatch(actLoginSuccess(username, respObj.token));
      //window.routerHistory.replace('/dashboard/query');
      window.routerHistory.push('/dashboard/query');
    }
    else {
      message.error(`登录失败: ${respObj.reason}`, 5);
    }
  }).catch(err => {
    message.error('发生错误', err);
  });
};

export const actLogout = () => {
  return {
    type: 'PERSIST__LOGOUT'
  };
};

export const actLoginSuccess = (loginUser, token) => {
  return {
    type: 'PERSIST__LOGIN_SUCCESS',
    token,
    loginUser
  }
};
