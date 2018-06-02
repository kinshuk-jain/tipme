import React, { PureComponent } from 'react';
import { View } from 'react-native';

// import { HomeScreen } from '../../home/components';
// import { AccountScreen } from '../../accounts/components';
import { PostOrderScreen } from '../../postOrder/components';
import { styles } from './shell.styles';

export class ShellComponent extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        {/* <HomeScreen /> */}
        {/* <AccountScreen /> */}
        <PostOrderScreen />
      </View>
    );
  }
}
