import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AdminLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  gotoLogin = () => {
    const { history } = this.props;
    if (history) history.push('/');
  };

  render() {
    return (
      <div className='admin-layout'>
        Admin Layout
        <button type='button' onClick={this.gotoLogin}>
          Go login
        </button>
      </div>
    );
  }
}
