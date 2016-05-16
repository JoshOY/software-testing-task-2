import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>This is page main.</div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    state
  };
};

export default connect(mapStateToProps)(Main);
