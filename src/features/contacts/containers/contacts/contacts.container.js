/* eslint-disable arrow-body-style */
import React, { Component } from 'react';
import Contacts from 'react-native-contacts';

import { Contacts as ContactsComponent } from '../../components';
import { BackHeader } from '../../../library/components';
import { INavigate } from '../../../../types/types';
// import { data } from './data';
import { checkContactReadPermission, requestContactReadPermission } from '../../../utils';


export class ContactsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <BackHeader navigation={navigation} />,
    title: 'Contacts',
  });

  getAllContacts = () => {
    return checkContactReadPermission()
      .then((permission) => {
        if (!permission) {
          return requestContactReadPermission()
            .then((hasPermission) => {
              if (!hasPermission) {
                throw new Error('No permission to read contacts');
              }
              return this.retrieveContacts();
            });
        }
        return this.retrieveContacts();
      })
      .then(val => Promise.all([val]))
      .then(val => val[0]);
  }

  getContactsMatchingString = (str) => {
    let result = {};
    Contacts.getContactsMatchingString(str, (err, contacts) => {
      if (err) {
        throw err;
      }
      result = contacts;
    });
    return result;
  }

  retrieveContacts = () => {
    let result = {};
    Contacts.getAll((err, contacts) => {
      if (err) {
        throw err;
      }
      // contacts returned
      result = contacts;
    });
    return result;
  }

  render() {
    const { navigation } = this.props;
    return (
      <ContactsComponent
        navigation={navigation}
        getContactsMatchingString={this.getContactsMatchingString}
        getAllContacts={this.getAllContacts}
      />
    );
  }
}

ContactsScreen.propTypes = {
  navigation: INavigate,
};
