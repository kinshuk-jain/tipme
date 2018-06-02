import React, { Component } from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import { COLORS } from '../../config';
import { styles } from './button.styles';
import { IStyle, IChildren } from '../../../types/types';

let Touchable;
const isAndroid = Platform.OS === 'android';

if (isAndroid && Platform.Version > 20) {
  Touchable = TouchableNativeFeedback;
} else {
  Touchable = TouchableOpacity;
}

if (Touchable !== TouchableNativeFeedback) {
  Touchable.SelectableBackground = () => ({});
  Touchable.Ripple = () => ({});
  Touchable.canUseNativeForeground = () => false;
}

// ripple color
export class Button extends Component {
  render() {
    const {
      useForeground = true,
      disabled = false,
      style,
      containerStyle,
      onBtnPress,
      ...props
    } = this.props;
    // can have only a single child
    const children = React.Children.only(this.props.children);
    const btnPressHandler = !disabled && onBtnPress ? onBtnPress : () => ({});

    return !isAndroid ? (
      <Touchable
        {...props}
        style={[styles.container, containerStyle]}
        onPress={btnPressHandler}
        underlayColor="white"
        activeOpacity={0.5}
      >
        <View style={[styles.button, disabled ? styles.disabled : '', style]}>
          {children}
        </View>
      </Touchable>
    ) : (
      <View style={[styles.container, containerStyle]}>
        <Touchable
          {...props}
          onPress={btnPressHandler}
          useForeground={useForeground && Touchable.canUseNativeForeground()}
          background={
            Platform.Version > 21 && !disabled
              ? Touchable.Ripple(COLORS.SHARK)
              : Touchable.SelectableBackground()
          }
        >
          <View style={[styles.button, disabled ? styles.disabled : '', style]}>
            {children}
          </View>
        </Touchable>
      </View>
    );
  }
}

Button.propTypes = {
  useForeground: PropTypes.bool,
  onBtnPress: PropTypes.func,
  disabled: PropTypes.bool,
  style: IStyle,
  containerStyle: PropTypes.number,
  children: IChildren,
};
