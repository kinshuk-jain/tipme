import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { CustomText } from '../../common';

import { styles } from './footer.styles';
import { INavigate, IStyle } from '../../../types/types';

const FooterItem = ({ style, text, onPress }) => (
  <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={style}>
    <CustomText textStyle={styles.centerText}>{text}</CustomText>
  </TouchableOpacity>
);

FooterItem.propTypes = {
  style: IStyle,
  text: PropTypes.string,
  onPress: PropTypes.func,
};

const CustomFooter = ({ navigation, ...props }) => (
  <View {...props} style={styles.container}>
    <FooterItem style={styles.widget} text={'accounts'} onPress={() => navigation.navigate('Home')} />
    <FooterItem style={styles.transfer} text={'transfer'} onPress={() => navigation.navigate('Send')} />
    <FooterItem style={styles.widget} text={'contacts'} onPress={null} />
  </View>
);

CustomFooter.propTypes = {
  navigation: INavigate,
};

export const Footer = withNavigation(CustomFooter);
