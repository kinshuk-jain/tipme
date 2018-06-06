import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Button, CustomText } from '../../../common';

import { styles } from './iconButton.styles';
import { IStyle, IImageSource, IChildren } from '../../../../types/types';

const Icon = ({ source = {} }) => <Image source={source} />;

Icon.propTypes = {
  source: IImageSource,
};

const Text = ({ text = '', textStyle = {}, wrapperStyle = {} }) => (
  <CustomText textStyle={textStyle} wrapperStyle={wrapperStyle}>{text}</CustomText>
);

Text.propTypes = {
  text: PropTypes.string.isRequired,
  textStyle: IStyle,
  wrapperStyle: IStyle,
};

export class IconButton extends PureComponent {
  static Icon = Icon;
  static Text = Text;
  render() {
    const { text, style, children, ...attributes } = this.props;
    return (
      <Button {...attributes} style={[styles.button, style]}>
        {children || (<View style={styles.wrapper}>
          <CustomText textStyle={styles.buttonText}>+</CustomText>
          <CustomText textStyle={styles.buttonText}>{text}</CustomText>
        </View>)}
      </Button>
    );
  }
}

IconButton.propTypes = {
  text: PropTypes.string.isRequired,
  style: IStyle,
  children: IChildren,
};
