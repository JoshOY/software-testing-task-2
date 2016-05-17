// ===================================
// 充值页面用到的actions

import fetch from 'isomorphic-fetch';

// ==================
// 第一步 - 点击下一步

export const actStepOneNext = (phoneNumber) => dispatch => {
  dispatch(actStepOneNextStart());
  setTimeout(() => {
    dispatch(actStepOneNextResolve(phoneNumber));
  }, 1000);
};

export const actStepOneNextStart = () => {
  return {
    type: 'RECHARGE__STEP_ONE_NEXT_START'
  }
};

export const actStepOneNextResolve = (phoneNumber) => {
  return {
    type: 'RECHARGE__STEP_ONE_NEXT_RESOLVE',
    phoneNumber
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

export const actStepTwoNext = (paymentMethod) => dispatch => {
  dispatch(actStepTwoNextStart());
  setTimeout(() => {
    dispatch(actStepTwoNextResolve(paymentMethod));
  }, 1000);
};

export const actStepTwoNextStart = () => {
  return {
    type: 'RECHARGE__STEP_TWO_NEXT_START'
  }
};

export const actStepTwoNextResolve = (paymentMethod) => {
  return {
    type: 'RECHARGE__STEP_TWO_NEXT_RESOLVE',
    paymentMethod
  }
};

export const actStepTwoNextReject = (msg) => {
  return {
    type: 'RECHARGE__STEP_TWO_NEXT_REJECT',
    msg
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

export const actStepThreeNext = (paymentId, paymentPassword, paymentAmount) => dispatch => {
  dispatch(actStepThreeNextStart());
  setTimeout(() => {
    dispatch(actStepThreeNextResolve(paymentId, paymentAmount));
  }, 1000);
};

export const actStepThreeNextStart = () => {
  return {
    type: 'RECHARGE__STEP_THREE_NEXT_START'
  };
};

export const actStepThreeNextResolve = (paymentId, paymentAmount) => {
  return {
    type: 'RECHARGE__STEP_THREE_NEXT_RESOLVE',
    paymentId,
    paymentAmount
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