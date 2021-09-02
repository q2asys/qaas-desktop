import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router';

import SigninPage from 'aui/pages/signin';

import AdminLayout from 'aui/layouts/admin';
import { ROOT_PATH, ADMIN_LAYOUT_ROOT } from './routes-cnsts';

export default class RoutesComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route path={ROOT_PATH} component={SigninPage} exact />
        <Route path={ADMIN_LAYOUT_ROOT} component={AdminLayout} />
      </Switch>
    );
  }
}
