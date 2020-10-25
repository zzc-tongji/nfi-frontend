import React from 'react';

import facebook from '../../static/image/facebook@2x.png';
import instagram from '../../static/image/instagram@2x.png';
import twitter from '../../static/image/twitter@2x.png';
import linkedin from '../../static/image/linkedin@2x.png';
import classes from './index.module.css';

export class FooterReact extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {};
  }

  render() {
    return (
      <div className={classes.container}>
        <div className={classes['container-band']}>
          <span className={classes['text-band']}>
            One-Stop Crypto Bank
          </span>
        </div>
        <div className={classes['container-share']}>
          <div className={classes['container-share-icon']}>
            <img alt="" src={twitter} style={{ height: 18 }} />
          </div>
          <div className={classes['container-share-icon']}>
            <img alt="" src={instagram} style={{ height: 18 }} />
          </div>
          <div className={classes['container-share-icon']}>
            <img alt="" src={facebook} style={{ height: 18 }} />
          </div>
          <div className={classes['container-share-icon']}>
            <img alt="" src={linkedin} style={{ height: 18 }} />
          </div>
        </div>
        <div className={classes['container-author']}>
          <span className={classes['text-author']}>
            @ 2020 One-Stop Crypto Bank
          </span>
        </div>
      </div >
    );
  }
}

FooterReact.propTypes = {};

export const Footer = FooterReact;
