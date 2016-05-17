import React, { Component } from 'react';

import './AppWrapper.less';

class AppWrapper extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-component-wrapper" style={ {'width': this.props.width || '' } }>
        { this.props.children }
      </div>
    );
  }
}

AppWrapper.defaultProps = {
  width: null
};

export default AppWrapper;
