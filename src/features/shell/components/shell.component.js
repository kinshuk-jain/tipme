import React, { PureComponent } from 'react';
import { View } from 'react-native';

import { Navigator } from '../../navigator/navigator.component';
import { styles } from './shell.styles';

// TODO  - add navigation to redux
export class ShellComponent extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Navigator />
      </View>
    );
  }
}
