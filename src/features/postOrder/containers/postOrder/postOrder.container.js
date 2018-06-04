/* eslint-disable arrow-body-style */
import React, { Component } from 'react';
import { PostOrder } from '../../components';
import { BackHeader } from '../../../library/components';
import { INavigate } from '../../../../types/types';
import { data } from './data';

export class PostOrderScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    // const { onBackClick } = navigation.state.params || {};
    return {
      header: <BackHeader navigation={navigation} />,
      title: 'Transfer',
    };
  };

  render() {
    const { navigation } = this.props;
    return <PostOrder data={data} navigation={navigation} />;
  }
}

PostOrderScreen.propTypes = {
  navigation: INavigate,
};
