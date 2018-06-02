import React from 'react';
import { View } from 'react-native';
import { Header, CustomText } from '../../../common';

import { styles } from './header.styles';

export const HomeHeader = props => (
  <Header {...props}>
    <View style={styles.container}>
      <CustomText wrapperStyle={styles.logo}>Logo</CustomText>
      <CustomText wrapperStyle={styles.settings}>Settings</CustomText>
    </View>
  </Header>
);
