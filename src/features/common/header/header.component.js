import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, View, TouchableOpacity } from 'react-native';

import { styles } from './header.styles';
import { COLORS } from '../../config';
import { IChildren } from '../../../types/types';

// TODO - Show/Hide header
export const Header = (props) => {
  const {
    children = null,
    statusBarProps,
    ...headerProps
  } = props;

  return (
    <View {...headerProps} style={styles.outerContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.PEACH_CREAM} {...statusBarProps} />
      <TouchableOpacity style={styles.innerContainer} activeOpacity={0.5}>
        {children}
      </TouchableOpacity>
    </View>
  );
};

Header.propTypes = {
  children: IChildren,
  statusBarProps: PropTypes.object,
};
