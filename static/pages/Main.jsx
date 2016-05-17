import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

// Import components
import { Menu, Icon, Row, Col } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import AppBody from '../components/AppBody/AppBody.jsx';
import AppHeader from '../components/AppHeader/AppHeader.jsx';
import AppWrapper from '../components/AppWrapper/AppWrapper.jsx';
import AppFoot from '../components/AppFoot/AppFoot.jsx';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'mail',
    };
  }

  render() {

    const { loginUser, loginStatus } = this.props;

    return (
      <AppBody>
        <AppHeader />
        <AppWrapper>
          <Row type="flex" justify="center">
            <Col span={20}>
              <h1>主页</h1>
              <p>
                欢迎您访问话费查询充值平台, 请选择:&nbsp;
                <Link to="/login" className="app-color-blue">登录查询</Link>
                或
                <Link to="/dashboard/recharge" className="app-color-blue">充值话费</Link>
              </p>
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
    loginUser: state.persist.loginUser,
    loginStatus: state.persist.loginStatus
  };
};

export default connect(mapStateToProps)(Main);

/*

 <AppNav>
 <Menu selectedKeys={[this.state.currentTab]} mode="horizontal">
 <Menu.Item key="mail">
 <Icon type="mail" />导航一
 </Menu.Item>
 <Menu.Item key="app" disabled>
 <Icon type="appstore" />导航二
 </Menu.Item>
 </Menu>
 </AppNav>

* */