import React from 'react';
import { useWallet } from 'use-wallet';

import * as actionJs from '../../../../redux/action';
import { store } from '../../../../redux/store';
import classes from './index.module.css';

const StatusBarReact = () => {
  const data = useWallet();
  const { account, chainId, networkName, reset, status } = useWallet();
  console.log(data);
  return (
    <div className={classes.container}>
      {
        status === 'connected' && (
          <div className={classes['container-account']}>
            <div className={classes['container-inner-account']}>
              <span className={classes['text-account']}>
                {`${account}${chainId === 1 ? '' : ` @ ${networkName}`}`}
              </span>
            </div>
          </div>
        )
      }
      <div
        className={classes['container-button']}
        onClick={() => {
          if (status === 'connected') {
            reset();
          } else {
            store.dispatch(actionJs.creator(
                actionJs.type.connectionMask,
                true,
            ));
          }
        }}
      >
        <div className={classes['container-inner-button']}>
          <span className={classes['text-button']}>
            {status === 'connected' ? 'Disconnect Wallet' : 'Connect Wallet'}
          </span>
        </div>
      </div>
    </div>
  );
};

export const StatusBar = StatusBarReact;
