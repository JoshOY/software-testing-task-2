// ============================================
// 中间件: 从localStorage中读取持久化存储数据(如token等), 防止浏览器刷新后redux的状态完全丢失

export default store => next => action => {

  const { type } = action;

  if (type === '__REDUX_STORE_INIT') {
    try {
      const storedPersistState = JSON.parse(
        localStorage.getItem('reduxStorage')
      );
      if (storedPersistState) {
        store.dispatch({
          type: '__REDUX_STORE_RESET_STATE',
          payload: storedPersistState
        });
      }
      return;
    } catch (e) {
      // Unable to load or parse stored state, proceed as usual
    }
  }

  next(action);
}