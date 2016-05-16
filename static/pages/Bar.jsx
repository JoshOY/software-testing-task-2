import React, { Component } from 'react';
import { connect } from 'react-redux';

class Bar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>This is page bar.</div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    state
  };
};

export default connect(mapStateToProps)(Bar);
