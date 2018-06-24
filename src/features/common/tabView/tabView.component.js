import React, { PureComponent } from 'react';
import { View } from 'react-native';

export class TabView extends PureComponent {
  renderTabBar() {
    return (
      <View />
    );
  }

  render() {
    return (
      <View>
        {this.renderTabBar()}
      </View>
    );
  }
}
