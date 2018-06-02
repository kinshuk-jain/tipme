import React, { Component } from 'react';
import { Home, HomeHeader } from '../../components';
import { INavigate } from '../../../../types/types';

import { data } from './data';

export class HomeScreen extends Component {
  static navigationOptions = {
    header: <HomeHeader />,
  };

  onAccountBtnClick = () => {
    const { navigate } = this.props.navigation;
    navigate('Account', { unique: '12345' });
  }

  render() {
    const { navigation } = this.props;
    return <Home data={data} onAccountBtnClick={this.onAccountBtnClick} navigation={navigation} />;
  }
}

HomeScreen.propTypes = {
  navigation: INavigate,
};
