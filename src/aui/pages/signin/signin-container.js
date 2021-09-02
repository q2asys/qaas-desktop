/* eslint-disable @typescript-eslint/no-unused-vars */

import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SigninComp from './signin-comp';

const mapStateToProps = (state) => {
  const { skinState = {} } = state;

  return {
    skinState,
  };
};

const mapDispatchToProps = (dispatch) => ({
  something: (args) => {
    // dispatch()
  },
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SigninComp);
