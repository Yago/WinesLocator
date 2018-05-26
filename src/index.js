import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Store from './Store';

import App from './components/App/App';

const store = Store();

const router = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root'),
);

registerServiceWorker();
