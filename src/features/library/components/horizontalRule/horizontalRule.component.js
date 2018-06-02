import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { IStyle } from '../../../../types/types';
import { styles } from './horizontalRule.styles';
import { CustomText } from '../../../common';

export const HorizontalRule = (props) => {
  const { text, style } = props;
  return !text ? (<View style={[styles.rule, style]} />) : (
    <View style={[styles.wrapper, style]}>
      <View style={styles.halfRule} />
      <CustomText wrapperStyle={styles.text}>{text}</CustomText>
      <View style={styles.halfRule} />
    </View>
  );
};

HorizontalRule.propTypes = {
  text: PropTypes.string,
  style: IStyle,
};
