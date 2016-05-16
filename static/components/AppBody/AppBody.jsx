import React, { Component } from 'react';

import './AppBody.less';

class AppBody extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-component-body">
        { this.props.children }
      </div>
    );
  }

}

export default AppBody;
