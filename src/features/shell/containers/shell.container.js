import React, { PureComponent } from 'react';
import { ShellComponent } from '../components/shell.component';

// TODO - should provide storage for app, store private key locally, lock pattern and hint
export class Shell extends PureComponent {
  render() {
    return (
      <ShellComponent />
    );
  }
}
