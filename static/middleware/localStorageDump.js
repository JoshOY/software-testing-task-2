// ============================================
// 中间件: 向localStorage中写入持久化存储数据(如token等)

export default store => next => action => {
  // 我们先执行action
  next(action);
  // 执行完action之后, 把persist中的状态同步至localStorage
  const persistState = store.getState().persist;
  localStorage.setItem('reduxStorage', JSON.stringify(persistState));
}
