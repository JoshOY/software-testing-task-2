import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Checkbox, Row, Col, Menu, Icon } from 'antd';
import { Link } from 'react-router';
const FormItem = Form.Item;

// Import components
import AppBody from '../components/AppBody/AppBody.jsx';
import AppHeader from '../components/AppHeader/AppHeader.jsx';
import AppNav from '../components/AppNav/AppNav.jsx';
import AppWrapper from '../components/AppWrapper/AppWrapper.jsx';
import AppFoot from '../components/AppFoot/AppFoot.jsx';

class Login extends Component {

  constructor(props) {
    super(props);

    this.loginForm = React.createClass({
      handleSubmit(e) {
        e.preventDefault();
        console.log('收到表单值：', this.props.form.getFieldsValue());
      },
      render() {
        const { getFieldProps } = this.props.form;
        const formItemLayout = {
          labelCol: { span: 6 },
          wrapperCol: { span: 14 },
        };

        return (
          <Form horizontal onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label="手机号码：">
              <Input type="text" placeholder="请输入手机号码" {...getFieldProps('phonenum')} />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="密码：">
              <Input type="password" placeholder="请输入密码" {...getFieldProps('password')} />
            </FormItem>
            <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
              <Button type="primary" htmlType="submit">登录</Button>
            </FormItem>
          </Form>
        );
      }
    });

    this.loginForm = Form.create()(this.loginForm);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', this.props.form.getFieldsValue());
  }

  render() {

    const LoginForm = this.loginForm;

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
        <AppWrapper width="50%">
          <Row type="flex" justify="center">
            <Col span={24}>
              <LoginForm />
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
    state
  };
};

export default connect(mapStateToProps)(Login);
