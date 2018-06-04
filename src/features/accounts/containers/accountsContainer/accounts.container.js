/* eslint-disable arrow-body-style */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { BackHeader } from '../../../library/components';

import { Account } from '../../components';
import { INavigate } from '../../../../types/types';
import { data } from './data';

export class AccountScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    // const { onBackClick } = navigation.state.params || {};
    return {
      header: <BackHeader navigation={navigation} />,
      title: 'Accounts',
    };
  };

  render() {
    const { navigation } = this.props;
    return <Account data={data} navigation={navigation} />;
  }
}

AccountScreen.propTypes = {
  navigation: INavigate,
};
