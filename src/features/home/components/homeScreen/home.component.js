import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import { HomeHeader } from '../../components';
import { Footer } from '../../../common';
import { AddButton, BalanceButton } from '../../../library/components';

import { styles } from './home.styles';
import { addButtonData, balanceButtonData } from './data';

export class HomeScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <HomeHeader />
        <ScrollView style={styles.scroller}>
          {
            balanceButtonData.map((data, i) => (
              <BalanceButton key={i} {...data} />
            ))
          }
          <AddButton text={addButtonData.text} />
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
