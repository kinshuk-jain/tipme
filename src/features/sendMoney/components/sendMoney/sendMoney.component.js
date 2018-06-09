import React, { PureComponent } from 'react';
import { TextInput, ScrollView, View, Text } from 'react-native';
import { CustomText, PickerSelect } from '../../../common';
import { IconButton } from '../../../library/components';
import { COLORS } from '../../../config';

import { styles } from './sendMoney.styles';
import { INavigate, ISelectItems } from '../../../../types/types';

export class SendMoney extends PureComponent {
  state = {
    selectedChanel: 2,
  };

  getSelected = () => this.props.selectData[this.state.selectedChanel];

  pickerChangeHandler = (itemValue, itemPosition) => {
    this.setState({ selectedChanel: itemPosition });
  }

  sendHandler = () => {
    const { navigation } = this.props;
    navigation.navigate('PostOrder');
  }

  render() {
    const { selectedChanel } = this.state;
    const { selectData } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroller}>
          <CustomText textStyle={styles.heading}>Amount</CustomText>
          <View style={styles.amountView}>
            <TextInput
              underlineColorAndroid={COLORS.WHITE}
              style={[styles.textInput, styles.alignRight]}
              placeholder={'0'}
              keyboardType={'numeric'}
            />
            <Text style={styles.dotStyle}>.</Text>
            <TextInput
              underlineColorAndroid={COLORS.WHITE}
              style={styles.textInput}
              placeholder={'00'}
              keyboardType={'numeric'}
            />
          </View>
          <CustomText textStyle={styles.heading}>Send To(Channel)</CustomText>
          <PickerSelect
            items={selectData}
            value={'phone'}
            onValueChange={this.pickerChangeHandler}
            style={styles.selectInput}
          />
          <CustomText textStyle={styles.heading}>{`To (${this.getSelected().value})`}</CustomText>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid={COLORS.WHITE}
            placeholder={this.getSelected().placeholder}
            keyboardType={selectedChanel === 2 ? 'numeric' : 'email-address'}
          />
          <IconButton style={styles.iconButton} onBtnPress={this.sendHandler}>
            <IconButton.Text text="Send" textStyle={styles.buttonText} />
            <IconButton.Icon source="" />
          </IconButton>
        </ScrollView>
      </View>
    );
  }
}

SendMoney.propTypes = {
  navigation: INavigate,
  selectData: ISelectItems,
};

SendMoney.defaultProps = {
  selectData: [],
};
