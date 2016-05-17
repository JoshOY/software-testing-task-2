import React, { Component } from 'react';
import { Table, Form, Input, Button, Checkbox, Row, Col, Menu, Icon } from 'antd';

import './AppNav.less';

class AppNav extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-component-nav clearfix">
        <Row type="flex" justify="center">
          <Col span={20}>
            { this.props.children }
          </Col>
        </Row>
      </div>
    );
  }

}

export default AppNav;
