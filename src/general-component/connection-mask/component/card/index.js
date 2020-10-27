import PropTypes from 'prop-types';
import React from 'react';

import classes from './index.module.css';

const CardReact = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes['container-left']}>
        <img src={props.imageUrl} style={{ height: 40, marginLeft: 24 }} />
        <div className={classes['container-name']}>
          <span className={classes['text-name']}>
            {props.name}
          </span>
        </div>
      </div>
      <div className={classes['container-right']}>
        <div
          className={classes['container-button']}
          onClick={props.onConnect}
        >
          <div className={classes['container-button-inner']}>
            <span className={classes['text-button']}>
              Connect
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

CardReact.propTypes = {
  // self
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onConnect: PropTypes.func.isRequired,
};

export const Card = CardReact;
