import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import Menu from 'antd/lib/menu';
import animType from '../../common/animType';
import './AppHeader.less';
const Item = Menu.Item;

class AppHeader extends React.Component {
  render() {
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
          <Item key="a">{menu1}</Item>
          <Item key="b">{menu2}</Item>
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
};

AppHeader.defaultProps = {
  className: 'header',
  dataSource: {
    img: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
    menu1: '号码查询',
    menu2: '号码充值',
    //menu3: '导航三',
    //menu4: '导航四',
  },
  variables: {
    type: 'leftRightPoly',
    ease: 'easeOutQuart',
    duration: 800,
    interval: 100,
    delay: 100,
  },
};

export default AppHeader;
