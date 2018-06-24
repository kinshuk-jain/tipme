import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import { styles } from './contacts.styles';

export class Contacts extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text> In Contacts </Text>
      </View>
    );
  }
}
