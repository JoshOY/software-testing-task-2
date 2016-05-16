import React, { Component } from 'react';
import { connect } from 'react-redux';

class Foo extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>This is page foo.</div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    state
  };
};

export default connect(mapStateToProps)(Foo);
