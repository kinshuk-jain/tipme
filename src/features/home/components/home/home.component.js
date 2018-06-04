import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Footer } from '../../../common';
import { AddButton, BalanceButton } from '../../../library/components';

import { styles } from './home.styles';
// import { INavigate } from '../../../../types/types';

export class Home extends PureComponent {
  render() {
    const { onAccountBtnClick, /* navigation, */ data } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroller}>
          {
            data.balanceButtonData.map((info, i) => (
              <BalanceButton key={i} onBtnPress={onAccountBtnClick} {...info} />
            ))
          }
          <AddButton text={data.addButtonData.text} />
        </ScrollView>
        <Footer />
      </View>
    );
  }
}

Home.propTypes = {
  onAccountBtnClick: PropTypes.func,
  data: PropTypes.object,
  // navigation: INavigate,
};
