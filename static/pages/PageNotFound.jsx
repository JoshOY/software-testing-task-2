import React, { Component } from 'react';
import { connect } from 'react-redux';

class PageNotFound extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>404 page not found...</div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    state
  };
};

export default connect(mapStateToProps)(PageNotFound);
