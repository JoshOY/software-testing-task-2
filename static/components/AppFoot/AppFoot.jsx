import React, { Component } from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import TweenOne from 'rc-tween-one';
import animType from '../../common/animType';
import './AppFoot.less';

class AppFoot extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { text, height } = this.props.dataSource;
    const { type, delay, duration, ease } = this.props.variables;
    const animData = animType[type].one;
    animData.animation.delay = delay;
    animData.animation.ease = ease;
    animData.animation.duration = duration;
    animData.animation.type = 'from';
    const _height = height.replace(/[0-9|.]/g, '') ? height : `${height}px`;
    return (
      <OverPack
        className={`${this.props.className} root`}
        playScale={0.05}
        id={this.props.id}
        style={{ height: _height }}
      >
        <TweenOne
          key="0" hideProps={{ reverse: true }}
          {...animData}
        >
          <p dangerouslySetInnerHTML={{ __html: text }}></p>
        </TweenOne>
      </OverPack>
    );
  }

}

AppFoot.defaultProps = {
  className: 'app-component-footer',
  dataSource: {
    height: '80px',
    text: 'Copyright © 2016 The Project by <a href="#">Ant Motion</a>. All Rights Reserved',
  },
  variables: {
    type: 'bottomPosition',
    ease: 'easeOutQuart',
    duration: 450,
    interval: 100,
    delay: 0,
  },
};

export default AppFoot;
