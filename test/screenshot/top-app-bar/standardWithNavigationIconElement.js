import React from 'react';
import ReactDOM from 'react-dom';
import TopAppBar from '../../../packages/top-app-bar';

import MaterialIcon from '../../../packages/material-icon';
import withRipple from '../../../packages/ripple';

import '../../../packages/top-app-bar/index.scss';
import '../../../packages/material-icon/index.scss';
import './index.scss';

const NavigationIcon = ({
  hasRipple, initRipple, unbounded, ...otherProps // eslint-disable-line react/prop-types
}) => (
  <a
    onClick={() => console.log('navigation icon click')}
    ref={initRipple}
    {...otherProps}>
    <svg
      width="24px" height="24px"
      xmlns="http://www.w3.org/2000/svg"
      className="material-icons"
      viewBox="0 0 24 24"
      fill="#fff">
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M23 12c0-6.07-4.93-11-11-11S1 5.93 1 12s4.93 11 11
      11 11-4.93 11-11zM5 17.64C3.75 16.1 3 14.14 3 12c0-2.13.76-4.08
      2-5.63v11.27zM17.64 5H6.36C7.9 3.75 9.86 3 12 3s4.1.75 5.64 2zM12
      14.53L8.24 7h7.53L12 14.53zM17 9v8h-4l4-8zm-6 8H7V9l4 8zm6.64
      2c-1.55 1.25-3.51 2-5.64 2s-4.1-.75-5.64-2h11.28zM21 12c0 2.14-.75
      4.1-2 5.64V6.37c1.24 1.55 2 3.5 2 5.63z"/>
    </svg>
  </a>
);

const NavigationIconWithRipple = withRipple(NavigationIcon);

ReactDOM.render((
  <div className='top-app-bar-container'>
    <TopAppBar
      title='Miami, FL'
      navigationIcon={<NavigationIconWithRipple unbounded />}
      actionItems={[<MaterialIcon key='item' icon='bookmark' />]}
    />
  </div>
), document.getElementById('app'));
