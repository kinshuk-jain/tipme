/* eslint-disable arrow-body-style */
import React, { Component } from 'react';
import { PostOrder, ConfirmTransaction } from '../../components';
import { BackHeader } from '../../../library/components';
import { INavigate } from '../../../../types/types';
import { data } from './data';

const HAVE_PVT_KEY = true;

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
    return HAVE_PVT_KEY
      ? (<ConfirmTransaction navigation={navigation} />)
      : (<PostOrder data={data} navigation={navigation} />);
  }
}

PostOrderScreen.propTypes = {
  navigation: INavigate,
};
