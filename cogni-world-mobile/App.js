import { Provider } from 'react-redux';
import React from 'react';

import AppConfigured from './src/AppConfigured';
import store from './src/store/createStore';

const App = () => (
  <Provider store={store}>
    <AppConfigured />
  </Provider>
);

export default App;
