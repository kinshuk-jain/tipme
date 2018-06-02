import React, { PureComponent } from 'react';
// import { Platform } from 'react-native';
import { ShellComponent } from '../components/shell.component';

// const instructions = Platform.select({
//   ios: 'ios',
//   android: 'Android',
// });

// TODO - should provide storage for app, store private key locally
export class Shell extends PureComponent {
  render() {
    return (
      <ShellComponent />
    );
  }
}
