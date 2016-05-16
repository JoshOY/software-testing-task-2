// ============================================
// Import modules

const initState = {};

// ============================================
// action handling function

const actDefault = (state, action) => {
  return state;
};


// ============================================
// reducer function

const reducerFn = (state = initState, action) => {
  switch(action.type) {
    default:
      return actDefault(state, action);
  }
};

export default reducerFn;
