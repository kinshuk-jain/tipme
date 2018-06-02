import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Header, CustomText } from '../../../common';

import { styles } from './backHeader.styles';

export const BackHeader = ({ onBackClick, ...props }) => (
  <Header {...props}>
    <View style={styles.container}>
      <CustomText onPress={onBackClick} wrapperStyle={styles.logo}>Back</CustomText>
      <CustomText wrapperStyle={styles.logo}>Logo</CustomText>
      <CustomText wrapperStyle={styles.settings}>Gear</CustomText>
    </View>
  </Header>
);

BackHeader.propTypes = {
  onBackClick: PropTypes.func,
};
