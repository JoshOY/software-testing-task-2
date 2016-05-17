import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TweenOne from 'rc-tween-one';
import { Link } from 'react-router';
import { Icon } from 'antd';
import Menu from 'antd/lib/menu';
import animType from '../../common/animType';
import './AppHeader.less';
const Item = Menu.Item;

// Import actions
import * as PersistActions from '../../actions/PersistActions.jsx';

class AppHeader extends React.Component {

  handleLogout(e) {
    e.preventDefault();
    this.props.dispatch(PersistActions.actLogout());
    window.routerHistory.push('/login');
  }

  render() {
    //console.log('header props: ', this.props);
    const { img, menu1, menu2, menu3, menu4 } = this.props.dataSource;
    const { type, delay, interval, duration, ease } = this.props.variables;
    const animData = ['one', 'tow'].map((order, i) => {
      const anim = animType[type][order] || animType[type].one;
      anim.animation.delay = i * (interval || 100) + delay;
      anim.animation.ease = ease;
      anim.animation.duration = duration;
      anim.delay = delay;
      anim.ease = ease;
      anim.duration = duration;
      // 间隔只给区块队列动画使用.. queueAnim 用;
      anim.interval = interval;
      anim.animation.type = 'from';
      return anim;
    });
    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      className={`${this.props.className} root`}
      id={this.props.id}
      >
      <TweenOne className={`${this.props.className}-logo`} {...animData[0]}>
        <img height="33" src={img} />
      </TweenOne>
      <TweenOne className={`${this.props.className}-nav`} {...animData[1]}>
        <Menu onClick={this.handleClick} mode="horizontal">
          <Item key="c" className={ this.props.loginStatus ? '' : 'app-none-display' }>
            <span onClick={ this.handleLogout.bind(this) }>
              <Icon type="user" />&nbsp;{ this.props.loginUser }&nbsp;-&nbsp;登出
            </span>
          </Item>
          <Item key="d" className={ (!this.props.loginStatus) ? '' : 'app-none-display' }>
            <Link className="app-color-blue" to="/login">点此登录</Link>
          </Item>
        </Menu>
      </TweenOne>
    </TweenOne>);
  }
}

AppHeader.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  dataSource: PropTypes.object,
  variables: PropTypes.object,
  loginUser: PropTypes.string,
};

AppHeader.defaultProps = {
  className: 'header',
  dataSource: {
    img: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
    menu1: '号码查询',
    menu2: '号码充值',
  },
  variables: {
    type: 'leftRightPoly',
    ease: 'easeOutQuart',
    duration: 800,
    interval: 100,
    delay: 100,
  },
};

const mapStateToProps = (state) => {
  return {
    dispatch: state.dispatch,
    loginUser: state.persist.loginUser,
    loginStatus: state.persist.loginStatus
  };
};

export default connect(mapStateToProps)(AppHeader);
