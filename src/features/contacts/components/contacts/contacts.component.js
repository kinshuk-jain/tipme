import React, { PureComponent } from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { View, Dimensions } from 'react-native';
import { FacebookTab, ContactsTab, TwitterTab } from '../../components';
import { Footer } from '../../../common';
import { COLORS } from '../../../config';

import { styles } from './contacts.styles';

export class Contacts extends PureComponent {
  constructor(props) {
    super(props);
    this.FirstRoute = () => (<ContactsTab {...props} />);
    this.SecondRoute = () => (<FacebookTab {...props} />);
    this.ThirdRoute = () => (<TwitterTab {...props} />);
    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: 'Contacts' },
        { key: 'second', title: 'Facebook' },
        { key: 'third', title: 'Twitter' },
      ],
    };
  }

  renderTabBar = () => props => (
    <TabBar
      {...props}
      style={{ backgroundColor: COLORS.CURIOUS_BLUE }}
      indicatorStyle={{ backgroundColor: COLORS.PORCELAIN }}
    />
  )

  render() {
    return (
      <View style={styles.container}>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: this.FirstRoute,
            second: this.SecondRoute,
            third: this.ThirdRoute,
          })}
          renderTabBar={this.renderTabBar()}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
        />
        <Footer />
      </View>
    );
  }
}
