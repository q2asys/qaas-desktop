import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import RouterComp from './router';

import configureStore, { history } from './store/configureStore';
import './App.global.scss';

const store = configureStore({});

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className='main-root'>HHHHHHHH</div>
          <RouterComp />
        </Router>
      </Provider>
    );
  }
}

export default App;
