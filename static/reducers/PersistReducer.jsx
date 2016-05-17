// ============================================
// Import modules

const initState = {
  token: '',
  loginUser: '',
  loginStatus: false,
};

// ============================================
// action handling function

const actSetToken = (state, action) => {
  return Object.assign({}, state, {
    'token': action.token
  });
};

const actReduxStoreResetState = (state, action) => {
  console.log('Resetting to state: ', action.payload);
  return Object.assign({}, state, action.payload);
};

const actLoginSuccess = (state, action) => {
  return Object.assign({}, state, {
    token: action.token,
    loginUser: action.loginUser,
    loginStatus: true
  });
};

const actLogout = (state, action) => {
  return Object.assign({}, state, {
    loginStatus: false
  });
};

const actDefault = (state, action) => {
  return state;
};


// ============================================
// reducer function

const reducerFn = (state = initState, action) => {
  switch(action.type) {
    case '__REDUX_STORE_RESET_STATE':
      return actReduxStoreResetState(state, action);
    case 'PERSIST__UPDATE_TOKEN':
      return actSetToken(state, action);
    case 'PERSIST__LOGIN_SUCCESS':
      return actLoginSuccess(state, action);
    case 'PERSIST__LOGOUT':
      return actLogout(state, action);
    default:
      return actDefault(state, action);
  }
};

export default reducerFn;
