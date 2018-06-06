import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './avatar.styles';
import { IStyle, IImageSource } from '../../../types/types';

// TODO - add default avatar image
const defaultSource = require('../../../assets/images/avatar/placeholder.png');

export const Avatar = (props) => {
  const { style = {} } = props;
  let source = props.source || {};
  source = Object.keys(source).length ? source : defaultSource;
  return (
    <View style={[styles.fillContainer, style]}>
      <Image source={source} style={styles.fillContainer} />
    </View>
  );
};

Avatar.propTypes = {
  style: IStyle,
  source: IImageSource,
};
