import React, { PureComponent } from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { CustomText } from '../../../common';
import { COLORS } from '../../../config';

export class ContactsTab extends PureComponent {
  state = {
    contacts: {},
  };

  componentDidMount() {
    const { getAllContacts } = this.props;
    getAllContacts()
      .then(
        contacts => this.setState(() => ({ contacts })),
      )
      .catch(err => console.error(`Error fetch contacts ${err}`));
  }

  onChangeHandler = (text) => {
    if (text) {
      const contacts = this.props.getContactsMatchingString(text);
      this.setState(() => ({
        contacts,
      }));
    }
  }

  render() {
    const { contacts } = this.state;
    return (
      <View>
        <TextInput
          placeholder={'Search Contacts...'}
          onChangeText={this.onChangeHandler}
          underlineColorAndroid={COLORS.WHITE}
        />
        <ScrollView>
          <CustomText>{JSON.stringify(contacts)}</CustomText>
        </ScrollView>
      </View>
    );
  }
}

ContactsTab.propTypes = {
  getAllContacts: PropTypes.func.isRequired,
  getContactsMatchingString: PropTypes.func.isRequired,
};
