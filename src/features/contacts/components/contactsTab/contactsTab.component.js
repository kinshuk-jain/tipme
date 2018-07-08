import React, { PureComponent } from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import PropTypes from 'prop-types';
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

  onChangeHandler(e) {
    const input = e.target.value;
    if (input) {
      const contacts = this.props.getContactsMatchingString(input);
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
          onChange={this.onChangeHandler}
          underlineColorAndroid={COLORS.WHITE}
        />
        <ScrollView>
          {JSON.stringify(contacts)}
        </ScrollView>
      </View>
    );
  }
}

ContactsTab.propTypes = {
  getAllContacts: PropTypes.func.isRequired,
  getContactsMatchingString: PropTypes.func.isRequired,
};
