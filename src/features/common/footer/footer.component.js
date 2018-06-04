import React from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

import { styles } from './footer.styles';
import { INavigate } from '../../../types/types';

const CustomFooter = ({ navigation, ...props }) => (
  <View {...props} style={styles.container}>
    <Text onPress={() => navigation.navigate('Home')} style={styles.widget}>accounts</Text>
    <Text onPress={() => navigation.navigate('PostOrder')} style={styles.transfer}>Transfer</Text>
    <Text style={styles.widget}>contacts</Text>
  </View>
);

CustomFooter.propTypes = {
  navigation: INavigate,
};

export const Footer = withNavigation(CustomFooter);
