// ============================================
// Import modules

const initState = {
  token: ''
};

// ============================================
// action handling function

const actSetToken = (state, action) => {
  return Object.assign({}, state, {
    'token': action.token
  });
};

const actReduxStoreResetState = (state, action) => {
  return Object.assign({}, state, action.payload);
};

const actDefault = (state, action) => {
  return state;
};


// ============================================
// reducer function

const reducerFn = (state = initState, action) => {
  switch(action.type) {
    case '__REDUX_STORE_RESET_STATE':
      return actReduxStoreResetState(state, action); break;
    case 'PERSIST__UPDATE_TOKEN':
      return actSetToken(state, action); break;
    default:
      return actDefault(state, action);
  }
};

export default reducerFn;
