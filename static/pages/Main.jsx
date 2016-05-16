import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import components
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import AppBody from '../components/AppBody/AppBody.jsx';
import AppNav from '../components/AppNav/AppNav.jsx';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'mail',
    };
  }

  render() {
    return (
      <AppBody>
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
      </AppBody>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    state
  };
};

export default connect(mapStateToProps)(Main);
