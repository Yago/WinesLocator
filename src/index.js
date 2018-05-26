import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import Store from './Store';

import App from './components/App/App';

const store = Store();

const wrapper = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  wrapper,
  document.getElementById('root'),
);

registerServiceWorker();
