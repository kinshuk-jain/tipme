import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from './features/store/configureStore';
import { Shell } from './features/shell/containers/shell.container';

const store = configureStore();

// TODO - add routing
export default class App extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    // check if Drawer open or not on Home Screen
    // if (store.getState().nav.index !== 0) {
    //   store.dispatch(NavigationActions.back());
    //   return true;
    // } else if (store.getState().nav.routes[0].index !== 1) {
    //   store.dispatch(NavigationActions.navigate({routeName: 'Start'}));
    //   return true;
    // }
    // return false;
  }

  render() {
    return (
      <Provider store={store}>
        <Shell />
      </Provider>
    );
  }
}
