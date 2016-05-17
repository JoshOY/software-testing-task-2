// ===================================
// 充值页面用到的actions

import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';
import Config  from '../appConfig';
import { message } from 'antd';
import * as PersistActions from './PersistActions.jsx';

// ==================
// 第一步 - 点击下一步

export const actStepOneNext = (phoneNumber, paymentAmount) => dispatch => {
  dispatch(actStepOneNextStart());
  setTimeout(() => {
    dispatch(actStepOneNextResolve(phoneNumber, paymentAmount));
  }, 1000);
};

export const actStepOneNextStart = () => {
  return {
    type: 'RECHARGE__STEP_ONE_NEXT_START'
  }
};

export const actStepOneNextResolve = (phoneNumber, paymentAmount) => {
  return {
    type: 'RECHARGE__STEP_ONE_NEXT_RESOLVE',
    phoneNumber,
    paymentAmount
  };
};

export const actStepOneNextReject = (msg) => {
  return {
    type: 'RECHARGE__STEP_ONE_NEXT_REJECT',
    msg
  };
};

// ==================
// 第二步 - 点击下一步

// 这里需要开始一个新的transaction
// 注意保存状态
export const actStepTwoNext = (paymentMethod) => dispatch => {
  dispatch(actStepTwoNextStart());
  /*setTimeout(() => {
    dispatch(actStepTwoNextResolve(paymentMethod));
  }, 1000);*/
  const recharge = window.store.getState().recharge;

  fetch(Config.transactionUrl + '/generate_transaction', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      money: recharge.paymentAmount,
      phoneNumber: recharge.phoneNumber
    })
  }).then(resp => resp.json())
  .then(respObj => {
    if (respObj.success) {
      dispatch(actStepTwoNextResolve(paymentMethod, respObj.tid));
    }
    else {
      message.error('发生错误: ' + respObj.reason);
      dispatch(actStepTwoNextReject());
    }
  });
};

export const actStepTwoNextStart = () => {
  return {
    type: 'RECHARGE__STEP_TWO_NEXT_START'
  }
};

export const actStepTwoNextResolve = (paymentMethod, tid) => {
  return {
    type: 'RECHARGE__STEP_TWO_NEXT_RESOLVE',
    paymentMethod,
    tid
  }
};

export const actStepTwoNextReject = () => {
  return {
    type: 'RECHARGE__STEP_TWO_NEXT_REJECT'
  }
};

// ==================
// 第二步 - 点击上一步

export const actStepTwoPrev = () => {
  return {
    type: 'RECHARGE__STEP_TWO_PREV'
  }
};

// ==================
// 第三步 - 点击下一步

// 异步请求完成支付

export const actStepThreeNext = (paymentId, paymentPassword) => dispatch => {
  dispatch(actStepThreeNextStart());
  /*setTimeout(() => {
    dispatch(actStepThreeNextResolve(paymentId));
  }, 1000);*/
  const recharge = window.store.getState().recharge;
  setTimeout(() => {
    fetch(Config.transactionUrl + '/pay/' + recharge.tid, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: paymentId,
        password: paymentPassword
      })
    })
    .then(resp => resp.json())
    .then(respObj => {
      if (respObj.success) {
        message.success('支付成功!');
        dispatch(actStepThreeNextResolve(paymentId));
      }
      else {
        message.error('支付失败: ' + respObj.reason);
        dispatch(actStepThreeNextReject());
      }
    });
  }, 1000);
};

export const actStepThreeNextStart = () => {
  return {
    type: 'RECHARGE__STEP_THREE_NEXT_START'
  };
};

export const actStepThreeNextResolve = (paymentId) => {
  return {
    type: 'RECHARGE__STEP_THREE_NEXT_RESOLVE',
    paymentId
  }
};

export const actStepThreeNextReject = () => {
  return {
    type: 'RECHARGE__STEP_THREE_NEXT_REJECT'
  }
};

// ==================
// 第三步 - 点击上一步

export const actStepThreePrev = () => {
  return {
    type: 'RECHARGE__STEP_THREE_PREV'
  }
};