// Use this text component whenever you need text
// do not use default Text component of react-native
import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './customText.styles';
import { IStyle, IChildren } from '../../../types/types';


export const CustomText = ({ children, wrapperStyle = {}, textStyle = {}, ...props }) => (
  <View style={wrapperStyle}>
    <Text {...props} style={[styles.text, textStyle]}>{children}</Text>
  </View>
);

CustomText.propTypes = {
  wrapperStyle: IStyle,
  textStyle: IStyle,
  children: PropTypes.oneOfType([
    IChildren,
    PropTypes.string,
  ]),
};
