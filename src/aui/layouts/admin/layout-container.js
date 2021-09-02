import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AdminLayout from './admin-layout';

const mapStateToProps = (state) => {
  const { skinState = {} } = state;

  const { appTitle } = skinState;

  return {
    appTitle,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mapDispatchToProps = (dispatch) => ({});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(AdminLayout);
