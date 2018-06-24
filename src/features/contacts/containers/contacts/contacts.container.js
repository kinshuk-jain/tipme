/* eslint-disable arrow-body-style */
import React, { Component } from 'react';
import { Contacts } from '../../components';
import { BackHeader } from '../../../library/components';
import { INavigate } from '../../../../types/types';
// import { data } from './data';


export class ContactsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <BackHeader navigation={navigation} />,
    title: 'Contacts',
  });

  render() {
    const { navigation } = this.props;
    return (<Contacts navigation={navigation} />);
  }
}

ContactsScreen.propTypes = {
  navigation: INavigate,
};
