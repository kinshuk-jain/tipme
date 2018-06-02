import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Button, CustomText } from '../../../common';

import { styles } from './addButton.styles';
import { IStyle } from '../../../../types/types';

// TODO - reduce its width
export const AddButton = (props) => {
  const { text, style, ...attributes } = props;
  return (
    <Button {...attributes} style={[styles.button, style]}>
      <View style={styles.wrapper}>
        <CustomText textStyle={styles.buttonText}>+</CustomText>
        <CustomText textStyle={styles.buttonText}>{text}</CustomText>
      </View>
    </Button>
  );
};

AddButton.propTypes = {
  text: PropTypes.string.isRequired,
  style: IStyle,
};
