import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { BackHeader } from '../../../library/components';

import { Account } from '../../components';
import { INavigate } from '../../../../types/types';
import { data } from './data';

export class AccountScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { onBackClick } = navigation.state.params || {};
    return {
      header: <BackHeader onBackClick={onBackClick} />,
      title: 'Accounts',
    };
  };

  componentWillMount() {
    const { navigation } = this.props;
    // const params = navigation.getParam('unique');
    navigation.setParams({ onBackClick: this.onBackClick });
  }

  onBackClick = () => {
    const { goBack } = this.props.navigation;
    goBack();
  }

  render() {
    const { navigation } = this.props;
    return <Account data={data} navigation={navigation} />;
  }
}

AccountScreen.propTypes = {
  navigation: INavigate,
};
