import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './footer.styles';

export const Footer = () => (
  <View style={styles.container}>
    <Text style={styles.widget}>accounts</Text>
    <Text style={styles.transfer}>Transfer</Text>
    <Text style={styles.widget}>contacts</Text>
  </View>
);
