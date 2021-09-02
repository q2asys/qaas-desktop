import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class RoutesComp extends PureComponent {
  static propTypes = {
    history: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  gotoAmdinHandler = () => {
    const { history } = this.props;
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', history);
    history.push('/admin');
  };

  render() {
    return (
      <div className='login-page'>
        <h1>Login Page</h1>

        <div className='login-btn'>
          <button type='button' onClick={this.gotoAmdinHandler}>
            Go Admin
          </button>
        </div>
      </div>
    );
  }
}
