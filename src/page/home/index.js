import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';

import { removeUrlSlashSuffix } from '../../utils/remove-url-slash-suffix';
import classes from './index.module.css';

class HomeReact extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {};
  }

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname} />);
    }
    return (
      <div className={classes.wrapper}>home</div>
    );
  }
}

HomeReact.propTypes = {
  // React Router
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const Home = HomeReact;
