import React, { Component } from 'react';
import { SendMoney } from '../../components';
import { BackHeader } from '../../../library/components';
import { INavigate } from '../../../../types/types';
import { supportedChannels } from './data';

export class SendMoneyScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <BackHeader navigation={navigation} />,
    title: 'Send',
  });

  render() {
    const { navigation } = this.props;
    return <SendMoney navigation={navigation} selectData={supportedChannels} />;
  }
}

SendMoneyScreen.propTypes = {
  navigation: INavigate,
};
