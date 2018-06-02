import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Button, CustomText } from '../../../common';

import { styles } from './balanceButton.styles';
import { IStyle } from '../../../../types/types';

const getTextColor = (status) => {
  let textColor;
  if (status === 'failed') {
    textColor = styles.status_failed;
  } else if (status === 'success') {
    textColor = styles.status_success;
  }
  return textColor;
};

export const BalanceButton = (props) => {
  const { style = 0, imgSource = {}, header = '',
    text = '', caption = '', balance = '', coin = '',
    status = '', ...attributes } = props;
  return (
    <Button {...attributes} style={[styles.button, style]}>
      <View style={styles.wrapper}>
        <View style={styles.logo}>
          <Image source={imgSource} />
        </View>
        <View style={styles.info}>
          <CustomText textStyle={styles.info_header}>{header}</CustomText>
          <CustomText textStyle={styles.info_text}>{text}</CustomText>
          <CustomText textStyle={styles.info_caption}>{caption}</CustomText>
        </View>
        <View style={styles.status}>
          <CustomText textStyle={styles.info_text}>{balance}</CustomText>
          <CustomText textStyle={styles.info_caption}>{coin}</CustomText>
          {!!status &&
            <CustomText
              textStyle={[
                styles.info_header,
                getTextColor(status),
              ]}
            >
              {status}
            </CustomText>}
        </View>
      </View>
    </Button>
  );
};

BalanceButton.propTypes = {
  style: IStyle,
  header: PropTypes.string,
  text: PropTypes.string,
  caption: PropTypes.string,
  balance: PropTypes.string,
  coin: PropTypes.string,
  status: PropTypes.string,
  imgSource: PropTypes.object,
};
