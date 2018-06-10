import React, { PureComponent } from 'react';
import { Dimensions } from 'react-native';
import { PatternLock } from '../../components';

const { width, height } = Dimensions.get('window');
const PATTERN_CONTAINER_HEIGHT = height / 2;
const PATTERN_CONTAINER_WIDTH = width;
const PATTERN_DIMENSION = 3;
const CORRECT_UNLOCK_PATTERN = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 2, y: 0 },
  { x: 1, y: 1 },
  { x: 0, y: 2 },
  { x: 1, y: 2 },
  { x: 2, y: 2 },
];

export class PatternLockScreen extends PureComponent {
  static navigationOptions = {
    title: '',
  };

  onBackPress = () => {
    // let {showPatternLock} = this.state;
    // if (showPatternLock) {
    //   this.setState({showPatternLock: false});
    //   this._patternContainerOpacity.setValue(0);
    //   this._resetAnimation();
    //   return true;
    // } else {
    //   BackHandler.exitApp();
    //   return false;
    // }
  }

  resetAnimation = () => {
    // Animated.timing(this._panYCoordinate, {
    //   toValue: 0,
    //   duration: 200
    // }).start();
  }

  render() {
    return (
      <PatternLock
        containerDimension={PATTERN_DIMENSION}
        containerWidth={PATTERN_CONTAINER_WIDTH}
        containerHeight={PATTERN_CONTAINER_HEIGHT}
        correctPattern={CORRECT_UNLOCK_PATTERN}
        hint="Draw letter 'Z' from top left to bottom right"
        onPatternMatch={this.onBackPress}
      />
    );
  }
}
