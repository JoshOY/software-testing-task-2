// ============================================
// Initial state

const initState = {
  queryData: {
    phoneNumber: '15221529016',   // 电话号码
    balance: 120.00,           // 余额
    communicationMinute: 150,  // 本月通话分钟
    annualDebtAccount: 0,      // 本年度未缴金额
    annualDebtTime: 0,         // 本年度未按时缴费次数
    debtAmountLastYear: 0,     // 跨年未缴金额
    monthOverdueFine: 0,       // 本月滞纳金
    monthPayAccount: 70,       // 本月应缴金额
    totalAccount: 70,          // 总应缴金额
  }
};

// ============================================
// action handling function

const actDefault = (state, action) => {
  return state;
};

const actQueryInfoResolve = (state, action) => {
  return Object.assign({}, state, {
    queryData: action.queryData
  });
};

// ============================================
// reducer function

const reducerFn = (state = initState, action) => {
  switch(action.type) {
    case 'QUERY__QUERY_INFO_RESOLVE':
      return actQueryInfoResolve(state, action);
    default:
      return actDefault(state, action);
  }
};

export default reducerFn;
