// ============================================
// Import modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Link, IndexLink, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import ReduxThunk from 'redux-thunk';

// ============================================
// Import pages
import Main from './pages/Main.jsx';
import Foo from './pages/Foo.jsx';
import Bar from './pages/Bar.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

// ============================================
// import root reducer
import RootReducer from './reducers/RootReducer.jsx';

// ============================================
// Import common stylesheet
import './common/base.less';
import './common/vendor.less';

// ============================================
// Render Components / Routers

const main = () => {

  // Create store
  const store = createStore(RootReducer, applyMiddleware(ReduxThunk));
  // Create an enhanced history that syncs navigation events with the store
  const history = syncHistoryWithStore(hashHistory, store);
  // render
  ReactDOM.render(
    (<Provider store={store}>
      <Router history={history}>
        <Route path="/">
          <IndexRoute component={Main} />
          <Route path="/foo" component={Foo} />
          <Route path="/bar" component={Bar} />
          <Route path="/*" component={PageNotFound} />
        </Route>
      </Router>
    </Provider>),
    document.getElementById('app-root')
  );
};

main.call(this);
