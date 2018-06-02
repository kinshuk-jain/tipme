import React from 'react';
import { View } from 'react-native';
import { Header, CustomText } from '../../../common';

import { styles } from './backHeader.styles';

export const BackHeader = props => (
  <Header {...props}>
    <View style={styles.container}>
      <CustomText wrapperStyle={styles.logo}>Back</CustomText>
      <CustomText wrapperStyle={styles.logo}>Logo</CustomText>
      <CustomText wrapperStyle={styles.settings}>Gear</CustomText>
    </View>
  </Header>
);
