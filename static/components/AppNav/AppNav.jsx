import React, { Component } from 'react';

import './AppNav.less';

class AppNav extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-component-nav clearfix">
        { this.props.children }
      </div>
    );
  }

}

export default AppNav;
