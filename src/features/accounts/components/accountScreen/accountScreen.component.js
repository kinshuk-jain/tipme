import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import { Footer, CustomText } from '../../../common';
import {
  AddButton,
  BalanceButton,
  HorizontalRule,
  BackHeader,
} from '../../../library/components';

import { styles } from './accountScreen.styles';
import { addButtonData, balanceButtonData, statusData } from './data';

export class AccountScreen extends PureComponent {
  renderTransaction = (data, i) => (
    <View style={styles.transaction} key={i}>
      <CustomText wrapperStyle={styles.label} textStyle={styles.labelText}>
        {data.date}
      </CustomText>
      {
        data.transactionHistory.map((info, ind) => (
          <BalanceButton key={ind} {...info} />
        ))
      }
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <BackHeader />
        <ScrollView style={styles.scroller}>
          <BalanceButton {...balanceButtonData} />
          <AddButton text={addButtonData.text} />
          <HorizontalRule />
          {
            statusData.map((data, i) => this.renderTransaction(data, i))
          }
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
