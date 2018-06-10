import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { CustomText, Button, Avatar } from '../../../common';

import { styles } from './confirmTransaction.styles';
import { INavigate } from '../../../../types/types';

const ArrowConnectedComponent = (props) => {
  const { left, right } = props;
  return (
    <View style={styles.arrowComponent}>
      <CustomText
        textStyle={styles.boldText}
        wrapperStyle={styles.arrowTextWrapper}
      >
        {left}
      </CustomText>
      <CustomText>{'----->'}</CustomText>
      <CustomText
        textStyle={styles.boldText}
        wrapperStyle={styles.arrowTextWrapper}
      >
        {right}
      </CustomText>
    </View>
  );
};

ArrowConnectedComponent.propTypes = {
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
};

export class ConfirmTransaction extends PureComponent {
  onSendPressHandler = () => {
    const { navigation } = this.props;
    navigation.navigate('PatternLock');
  }

  onCancelPressHandler = () => {
    const { navigation } = this.props;
    navigation.navigate('Send');
  }

  renderReceiver() {
    return (
      <View style={styles.receiverContainer}>
        <CustomText textStyle={styles.heading}>Receiver</CustomText>
        <View style={styles.receiver}>
          <Avatar source={{}} />
          <CustomText textStyle={styles.receiverName}>Kinshuk Jain</CustomText>
        </View>
      </View>
    );
  }

  renderButton(text, handler) {
    return (
      <Button style={styles.button} onBtnPress={handler}>
        <View style={styles.buttonView}>
          <CustomText textStyle={styles.buttonText}>{text}</CustomText>
        </View>
      </Button>
    );
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <ScrollView style={styles.innerContainer}>
          <CustomText textStyle={styles.heading}>Confirm Transaction</CustomText>
          <ArrowConnectedComponent left={'Sending'} right={'0.003 ETH'} />
          <ArrowConnectedComponent left={'To'} right={'+91-876543210'} />
          {this.renderReceiver()}
          {this.renderButton('Send It', this.onSendPressHandler)}
          {this.renderButton('Cancel', this.onCancelPressHandler)}
        </ScrollView>
      </View>
    );
  }
}

ConfirmTransaction.propTypes = {
  navigation: INavigate,
};
