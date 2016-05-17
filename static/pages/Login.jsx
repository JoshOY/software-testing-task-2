import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
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
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', this.props.form.getFieldsValue());
  }

  render() {

    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <AppBody>
        <AppHeader />
        <AppWrapper width="50%">
          <Row type="flex" justify="center">
            <Col span={24}>
              <Form horizontal onSubmit={this.handleSubmit}>
                <FormItem
                  {...formItemLayout}
                  label="用户名：">
                  <Input type="text" placeholder="请输入用户名" />
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="密码：">
                  <Input type="password" placeholder="请输入密码" />
                </FormItem>
                <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
                  <Button type="primary">登录</Button>
                </FormItem>
              </Form>
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
