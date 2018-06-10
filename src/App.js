import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './features/store/configureStore';
import { Shell } from './features/shell/containers/shell.container';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Shell />
      </Provider>
    );
  }
}
