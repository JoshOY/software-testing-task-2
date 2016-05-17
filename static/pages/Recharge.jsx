import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { Table, Form, Input, InputNumber, Button, Checkbox, Select, message, Alert,
         Row, Col, Menu, Icon, Breadcrumb, Steps, Spin } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Step = Steps.Step;
const FormItem = Form.Item;
import AppBody from '../components/AppBody/AppBody.jsx';
import AppHeader from '../components/AppHeader/AppHeader.jsx';
import AppWrapper from '../components/AppWrapper/AppWrapper.jsx';
import AppFoot from '../components/AppFoot/AppFoot.jsx';
import AppNav from '../components/AppNav/AppNav.jsx';

// =========================================
// redux actions
import * as RechargeActions from '../actions/RechargeActions.jsx';

// =========================================
// 第一步表单

const formStepOne = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
      this.props.dispatch(RechargeActions.actStepOneNext(values.phoneNumber, values.paymentAmount));
    });
  },
  phoneNumberNotExist(rule, value, callback) {
    if (!value) {
      callback();
    } else {
      setTimeout(() => {
        if (!value.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)) {
          callback([new Error('请输入正确的手机号码。')]);
        } else {
          callback();
        }
      }, 800);
    }
  },
  validatePaymentAmount(rule, value, callback) {
    if (!value) {
      callback();
    } else {
      setTimeout(() => {
        if (!value.match(/^[1-9]+[0-9]*((\.)[0-9])?[0-9]?$/)) {
          callback([new Error('请输入合法的金额。')]);
        } else {
          callback();
        }
      }, 800);
    }
  },

  render() {
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    // 验证
    const phoneNumberProps = getFieldProps('phoneNumber', {
      rules: [
        { required: true, message: '请填写手机号码' },
        { validator: this.phoneNumberNotExist }
      ]
    });
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const paymentAmountProps = getFieldProps('paymentAmount', {
      rules: [
        {
          required: true,
          message: `请填写支付金额.`
        },
        {
          validator: this.validatePaymentAmount
        }
      ]
    });
    return (
      <Form horizontal onSubmit={this.handleSubmit}  form={this.props.form}>
        <FormItem
          {...formItemLayout}
          hasFeedback
          help={isFieldValidating('phoneNumber') ? '校验中...' : (getFieldError('phoneNumber') || []).join(', ')}
          label="手机号码：">
          <Input type="text"  {...phoneNumberProps} placeholder="请填写您要充值的手机号码" />
        </FormItem>
        <FormItem
          {...formItemLayout}
          hasFeedback
          label="支付金额(元): ">
          <Input type="text" {...paymentAmountProps} placeholder="请填写您的支付金额" />
        </FormItem>
        <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
          <Button type="primary" htmlType="submit">下一步</Button>
        </FormItem>
      </Form>
    );
  }
});

// =========================================
// 第二步表单


const formStepTwo = React.createClass({

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
      this.props.dispatch(RechargeActions.actStepTwoNext(values.paymentMethod));
    });
  },

  handleGotoPrevStep(e) {
    console.log('Goto prev step: Step 1.');
    this.props.dispatch(RechargeActions.actStepTwoPrev());
  },

  render() {
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;

    const payMethodProps = getFieldProps('paymentMethod', {
      rules: [{
        required: true,
        message: '请选择支付方式'
      }]
    });

    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <Form horizontal onSubmit={this.handleSubmit}  form={this.props.form}>
        <FormItem {...formItemLayout} label="请选择支付方式：" required>
          <Select size="large" defaultValue="ALIPAY" style={{ width: 200 }}
            {...payMethodProps} >
            <Option value="ALIPAY">支付宝</Option>
            <Option value="PAYPAL">PayPal</Option>
            <Option value="CMB">招商银行</Option>
            <Option value="ICBC">工商银行</Option>
            <Option value="ABC">农业银行</Option>
          </Select>
        </FormItem>
        <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
          <Button type="ghost" onClick={this.handleGotoPrevStep}>上一步</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="primary" htmlType="submit">下一步</Button>
        </FormItem>
      </Form>
    );
  }
});


// =========================================
// 第三步表单

const formStepThree = React.createClass({

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
      this.props.dispatch(RechargeActions.actStepThreeNext(values.paymentId, values.paymentPassword));
    });
  },

  handleGotoPrevStep(e) {
    console.log('Goto prev step: Step 2.');
    this.props.dispatch(RechargeActions.actStepThreePrev());
  },



  render() {
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;

    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    const paymentNameMap = {
      null: '',
      'ALIPAY': '支付宝账号',
      'PAYPAL': 'PayPal账号',
      'CMB': '招商银行卡号',
      'ICBC': '工商银行卡号',
      'ABC': '农业银行卡号'
    };

    const paymentIdProps = getFieldProps('paymentId', {
      rules: [{
        required: true,
        message: `请填写您的${paymentNameMap[this.props.paymentMethod]}.`
      }]
    });

    const paymentPasswordProps = getFieldProps('paymentPassword', {
      rules: [{
        required: true,
        message: `请填写您的支付密码.`
      }]
    });

    return (
      <Form horizontal onSubmit={this.handleSubmit}  form={this.props.form}>
        <FormItem
          {...formItemLayout}
          label="支付金额：">
          <p className="ant-form-text" id="paymentAccount" name="paymentAccount">
            { this.props.paymentAmount + ' 元' }
          </p>
        </FormItem>
        <FormItem
          {...formItemLayout}
          hasFeedback
          label={paymentNameMap[this.props.paymentMethod] + "："}>
          <Input type="text" {...paymentIdProps} placeholder="请填写您的账号/卡号" />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="支付密码："
          hasFeedback>
          <Input {...paymentPasswordProps} type="password" placeholder="请填写您的支付密码"
                 autoComplete="off" onContextMenu={false} onPaste={false} onCopy={false} onCut={false} />
        </FormItem>
        <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
          <Button type="ghost" onClick={this.handleGotoPrevStep}>上一步</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="primary" htmlType="submit">确认付款</Button>
        </FormItem>
      </Form>
    );
  }

});


// ========================================


class Recharge extends Component {

  constructor(props) {
    super(props);

    this.steps = [
      {
        title: '输入手机号',
        description: '您将要进行充值的手机号码',
      },
      {
        title: '选择支付方式',
        description: '支持支付宝/PayPal/银联等',
      },
      {
        title: '进行支付',
        description: '进行第三方支付',
      },
      {
        title: '支付完成',
        description: '完成您的充值操作',
      }
    ].map((s, i) => <Step key={i} title={s.title} description={s.description} />);

    this.formStepOne = Form.create()(formStepOne);
    this.formStepTwo = Form.create()(formStepTwo);
    this.formStepThree = Form.create()(formStepThree);

    this.billColumns = [
      {
        title: '充值号码',
        dataIndex: 'phoneNumber',
      },
      {
        title: '支付方式',
        dataIndex: 'paymentMethod',
      },
      {
        title: '充值金额',
        dataIndex: 'paymentAccount',
      },
      {
        title: '流水号',
        dataIndex: 'paymentUid',
      },
      {
        title: '余额',
        dataIndex: 'balance',
      },
    ];

    this.paymentNameMap = {
      null: '',
      'ALIPAY': '支付宝',
      'PAYPAL': 'PayPal',
      'CMB': '招商银行',
      'ICBC': '工商银行',
      'ABC': '农业银行'
    };
  }

  render() {

    const { reduxStore, currentStep, dispatch, pendingState, paymentMethod, paymentAmount } = this.props;
    const FormStepOne = this.formStepOne;
    const FormStepTwo = this.formStepTwo;
    const FormStepThree = this.formStepThree;

    // 生成账单
    const billData = [{
      'phoneNumber': reduxStore.recharge.phoneNumber,
      'paymentMethod': this.paymentNameMap[reduxStore.recharge.paymentMethod],
      'paymentAccount': '￥' + reduxStore.recharge.paymentAmount,
      'paymentUid': reduxStore.recharge.paymentUid,
      'balance': '￥' + reduxStore.recharge.balance
    }];

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
              <div>
                <Steps current={currentStep}>{this.steps}</Steps>
              </div>
            </Col>
          </Row>
          <Row type="flex" justify="center" className="m-t-xl">
            <Col span={18}>
              <div className={ currentStep === 0 ? '' : 'app-none-display' }>
                <Spin spinning={pendingState}>
                  <FormStepOne dispatch={dispatch} />
                </Spin>
              </div>
              <div className={ currentStep === 1 ? '' : 'app-none-display' }>
                <Spin spinning={pendingState}>
                  <FormStepTwo dispatch={dispatch} />
                </Spin>
              </div>
              <div className={ currentStep === 2 ? '' : 'app-none-display' }>
                <Spin spinning={pendingState}>
                  <FormStepThree dispatch={dispatch}
                                 paymentMethod={paymentMethod}
                                 paymentAmount={paymentAmount} />
                </Spin>
              </div>
              <div className={ currentStep === 3 ? '' : 'app-none-display' }>
                <div>
                  <Alert message="支付成功"
                         description="恭喜您已经成功完成了话费支付, 请核对您的账单!"
                         type="success"
                         showIcon />
                </div>
                <Table columns={this.billColumns} dataSource={billData} pagination={false} />
              </div>
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
    currentStep: state.recharge.currentStep,
    pendingState: state.recharge.pendingState,
    paymentMethod: state.recharge.paymentMethod,
    paymentAmount: state.recharge.paymentAmount
  };
};

export default connect(mapStateToProps)(Recharge);
