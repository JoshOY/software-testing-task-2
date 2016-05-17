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

// import actions
import * as QueryActions from '../actions/QueryActions.jsx';

class Query extends Component {

  constructor(props) {
    super(props);

    this.columns = [
      {
        title: '项目',
        dataIndex: 'name',
      },
      {
        title: '查询结果',
        dataIndex: 'val'
      }
    ];

    this.props.dispatch(QueryActions.actQueryInfo(this.props.token));
  }

  ComponentDidMount() {

  }

  render() {

    const { reduxStore, token, queryData } = this.props;

    this.tableData = [
      {
        key: '1',
        name: '电话号码',
        val: queryData.phoneNumber,
      },
      {
        key: '2',
        name: '余额',
        val: '￥' + queryData.balance,
      },
      {
        key: '3',
        name: '本月通话时长',
        val: queryData.communicationMinute + ' 分钟',
      },
      {
        key: '4',
        name: '本年度未缴金额',
        val: '￥' + queryData.annualDebtAccount,
      },
      {
        key: '5',
        name: '本年度未按时缴费次数',
        val: queryData.annualDebtTime,
      },
      {
        key: '6',
        name: '跨年未缴金额',
        val: '￥' + queryData.debtAmountLastYear,
      },
      {
        key: '7',
        name: '本月滞纳金',
        val: '￥' + queryData.monthOverdueFine,
      },
      {
        key: '8',
        name: '本月应缴金额',
        val: '￥' + queryData.monthPayAccount,
      },
      {
        key: '9',
        name: '总应缴金额',
        val: '￥' + queryData.totalAccount,
      },
    ];

    return (
      <AppBody>
        <AppHeader />
        <AppNav>
          <Menu selectedKeys={['query']} mode="horizontal">
            <Menu.Item key="query">
              <Icon type="search" />账号查询
            </Menu.Item>
            <Menu.Item key="recharge">
              <Link to="/dashboard/recharge">
                <Icon type="pay-circle-o" />账号充值
              </Link>
            </Menu.Item>
          </Menu>
        </AppNav>

        <AppWrapper>
          <Row type="flex" justify="center">
            <Col span={20}>
              <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/">账号中心</Link></Breadcrumb.Item>
                <Breadcrumb.Item>账号查询</Breadcrumb.Item>
              </Breadcrumb>
              <h1 style={{'margin': '15px 0'}} >号码状态查询</h1>
              <Table columns={this.columns} dataSource={this.tableData} pagination={false} />
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
    dispatch: state.dispatch,
    token: state.persist.token,
    queryData: state.query.queryData,
    loginUser: state.persist.loginUser,
    loginStatus: state.persist.loginStatus
  };
};

export default connect(mapStateToProps)(Query);
