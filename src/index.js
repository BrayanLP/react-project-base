import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import * as models from './models/';
import { Router } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';

const store = init({
  models
});

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Suspense
      // fallback={false}
      fallback={<p>loading...</p>}
    >
      <Router history={history}>
        <App />
      </Router>
    </Suspense>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
