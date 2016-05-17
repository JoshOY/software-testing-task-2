// ============================================
// Import modules

const initState = {
  currentStep: 0,
  pendingState: false,
  phoneNumber: null,
  paymentMethod: null,
  paymentId: null,
  paymentAmount: null,
  paymentUid: 'dsfasduf83-adfasdi-sdfasxcxzv',
  balance: '50.00'
};

// ============================================
// action handling function

const actDefault = (state, action) => {
  return state;
};

// ===================
// 第一步 - 点击下一步

const actStepOneNextStart = (state, action) => {
  return Object.assign({}, state, {
    pendingState: true
  });
};

const actStepOneNextResolve = (state, action) => {
  return Object.assign({}, state, {
    pendingState: false,
    currentStep: 1,
    phoneNumber: action.phoneNumber
  });
};

const actStepOneNextReject = (state, action) => {
  return Object.assign({}, state, {
    pendingState: false
  });
};

// ==================
// 第二步 - 点击下一步

const actStepTwoNextStart = (state, action) => {
  return Object.assign({}, state, {
    pendingState: true
  });
};

const actStepTwoNextResolve = (state, action) => {
  return Object.assign({}, state, {
    pendingState: false,
    currentStep: 2,
    paymentMethod: action.paymentMethod
  });
};

const actStepTwoNextReject = (state, action) => {
  return Object.assign({}, state, {
    pendingState: false
  });
};

// ==================
// 第二步 - 点击上一步

const actStepTwoPrev = (state, action) => {
  return Object.assign({}, state, {
    pendingState: false,
    currentStep: 0,
    paymentMethod: null,
    phoneNumber: null
  });
};

// ==================
// 第三步 - 点击下一步

const actStepThreeNextStart = (state, action) => {
  return Object.assign({}, state, {
    pendingState: true
  });
};

const actStepThreeNextResolve = (state, action) => {
  return Object.assign({}, state, {
    pendingState: false,
    currentStep: 3,
    paymentId: action.paymentId,
    paymentAmount: action.paymentAmount
  });
};

const actStepThreeNextReject = (state, action) => {
  return Object.assign({}, state, {
    pendingState: false
  });
};

const actStepThreePrev = (state, action) => {
  return Object.assign({}, state, {
    pendingState: false,
    currentStep: 1,
    paymentMethod: null
  });
};

// ============================================
// reducer function

const reducerFn = (state = initState, action) => {
  switch(action.type) {
    // ===================
    // 第一步 - 点击下一步
    case 'RECHARGE__STEP_ONE_NEXT_START':
      return actStepOneNextStart(state, action);
    case 'RECHARGE__STEP_ONE_NEXT_RESOLVE':
      return actStepOneNextResolve(state, action);
    case 'RECHARGE__STEP_ONE_NEXT_REJECT':
      return actStepOneNextReject(state, action);
    // ==================
    // 第二步 - 点击下一步
    case 'RECHARGE__STEP_TWO_NEXT_START':
      return actStepTwoNextStart(state, action);
    case 'RECHARGE__STEP_TWO_NEXT_RESOLVE':
      return actStepTwoNextResolve(state, action);
    case 'RECHARGE__STEP_TWO_NEXT_REJECT':
      return actStepTwoNextReject(state, action);
    // ==================
    // 第二步 - 点击上一步
    case 'RECHARGE__STEP_TWO_PREV':
      return actStepTwoPrev(state, action);
    // ==================
    // 第三步 - 点击下一步
    case 'RECHARGE__STEP_THREE_NEXT_START':
      return actStepThreeNextStart(state, action);
    case 'RECHARGE__STEP_THREE_NEXT_RESOLVE':
      return actStepThreeNextResolve(state, action);
    case 'RECHARGE__STEP_THREE_NEXT_REJECT':
      return actStepThreeNextReject(state, action);
    // ==================
    // 第三步 - 点击上一步
    case 'RECHARGE__STEP_THREE_PREV':
      return actStepThreePrev(state, action);
    default:
      return actDefault(state, action);
  }
};

export default reducerFn;
