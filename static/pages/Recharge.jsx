import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { Table, Form, Input, Button, Checkbox, Row, Col, Menu, Icon, Breadcrumb } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import AppBody from '../components/AppBody/AppBody.jsx';
import AppHeader from '../components/AppHeader/AppHeader.jsx';
import AppWrapper from '../components/AppWrapper/AppWrapper.jsx';
import AppFoot from '../components/AppFoot/AppFoot.jsx';
import AppNav from '../components/AppNav/AppNav.jsx';

class Recharge extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { reduxStore, token, queryData } = this.props;

    return (
      <AppBody>
        <AppHeader />
        <AppNav>
          <Menu selectedKeys={['recharge']} mode="horizontal">

            <Menu.Item key="query">
              <Link to="/dashboard/query">
              <Icon type="search" />账号查询
              </Link>
            </Menu.Item>

            <Menu.Item key="recharge">
              <Icon type="pay-circle-o" />账号充值
            </Menu.Item>
          </Menu>
        </AppNav>

        <AppWrapper>
          <Row type="flex" justify="center">
            <Col span={20}>
              <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/">账号中心</Link></Breadcrumb.Item>
                <Breadcrumb.Item>账号充值</Breadcrumb.Item>
              </Breadcrumb>
              <h1 style={{'margin': '15px 0'}} >号码充值</h1>

            </Col>
          </Row>
        </AppWrapper>
        <AppFoot />
      </AppBody>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    reduxStore: state,
    token: state.persist.token,
    queryData: state.query.queryData
  };
};

export default connect(mapStateToProps)(Recharge);
