/* 该Reducer为根reducer, 用于combine App中所有的reducer.
 * 由于Redux中必须只有一个store和一个reducer,
 * 因此不要创建多个store！相反，使用 combineReducers 来把多个 reducer 创建成一个根 reducer。
 */

// ============================================
// Import modules

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// ============================================
// Import app reducers
import MainReducer from './MainReducer.jsx';

// ============================================
// Combine

const RootReducer = combineReducers({
  'main': MainReducer,
  // 注意一定要加上routing: routerReducer
  'routing': routerReducer
});

export default RootReducer;
