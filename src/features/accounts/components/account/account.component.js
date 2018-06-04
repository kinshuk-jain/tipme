import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Footer, CustomText } from '../../../common';
import {
  AddButton,
  BalanceButton,
  HorizontalRule,
} from '../../../library/components';
// import { INavigate } from '../../../../types/types';

import { styles } from './account.styles';

export class Account extends PureComponent {
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
    const { /* navigation, */ data } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroller}>
          <BalanceButton {...data.balanceButtonData} />
          <AddButton text={data.addButtonData.text} />
          <HorizontalRule />
          {
            data.statusData.map((info, i) => this.renderTransaction(info, i))
          }
        </ScrollView>
        <Footer />
      </View>
    );
  }
}

Account.propTypes = {
  // navigation: INavigate,
  data: PropTypes.object,
};
