/* eslint-disable no-unused-expressions, react/sort-comp, no-shadow */
import React, { PureComponent } from 'react';
import { View, Animated, PanResponder } from 'react-native';
import Svg, { Line, Circle } from 'react-native-svg';
import PropTypes from 'prop-types';
import { CustomText } from '../../../common';
import { COLORS } from '../../../config';

import {
  populateDotsCoordinate,
  getDotIndex,
  getIntermediateDotIndexes,
} from '../../utils/patternLock.utils';

import { styles } from './patternLock.styles';

const DEFAULT_DOT_RADIUS = 5;
const SNAP_DOT_RADIUS = 10;
const SNAP_DURATION = 100;

const ICoordinate = PropTypes.shape({
  x: PropTypes.number,
  y: PropTypes.number,
});

export class PatternLock extends PureComponent {
  static propTypes = {
    containerDimension: PropTypes.number,
    containerWidth: PropTypes.number,
    containerHeight: PropTypes.number,
    correctPattern: PropTypes.arrayOf(ICoordinate),
    hint: PropTypes.string,
    onPatternMatch: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      initialGestureCoordinate: null,
      activeDotCoordinate: null,
      pattern: [],
      showError: false,
      showHint: false,
    };

    const { containerDimension, containerWidth, containerHeight } = this.props;

    const { screenCoordinates, mappedIndex } =
      populateDotsCoordinate(containerDimension, containerWidth, containerHeight);

    this.dots = screenCoordinates;
    this.mappedDotsIndex = mappedIndex;
    this.dotNodes = [];

    this.snapAnimatedValues = this.dots.map((dot, index) => {
      const animatedValue = new Animated.Value(DEFAULT_DOT_RADIUS);
      animatedValue.addListener(({ value }) => {
        const dotNode = this.dotNodes[index];
        dotNode && dotNode.setNativeProps({ r: value.toString() });
      });
      return animatedValue;
    });

    this.panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => !this.state.showError,
      onMoveShouldSetPanResponderCapture: () => !this.state.showError,

      onPanResponderGrant: this.panResponderGrantHandler,
      onPanResponderMove: this.panResponderMoveHandler,
      onPanResponderRelease: this.panResponderReleaseHandler,
    });
  }

  componentWillUnmount() {
    clearTimeout(this.resetTimeout);
  }

  panResponderReleaseHandler = () => {
    const { pattern } = this.state;
    const { onPatternMatch } = this.props;
    if (pattern.length) {
      if (this.isPatternMatched(pattern)) {
        this.setState({
          initialGestureCoordinate: null,
          activeDotCoordinate: null,
        },
        () => {
          onPatternMatch && onPatternMatch();
        });
      } else {
        this.setState({
          initialGestureCoordinate: null,
          activeDotCoordinate: null,
          showError: true,
        },
        () => {
          this.resetTimeout = setTimeout(() => {
            this.setState({
              showHint: true,
              showError: false,
              pattern: [],
            });
          }, 2000);
        },
        );
      }
    }
  }

  panResponderGrantHandler = (e) => {
    const { locationX, locationY } = e.nativeEvent;

    const activeDotIndex = getDotIndex({ x: locationX, y: locationY }, this.dots);

    if (activeDotIndex != null) {
      const activeDotCoordinate = this.dots[activeDotIndex];
      const firstDot = this.mappedDotsIndex[activeDotIndex];
      const dotWillSnap = this.snapAnimatedValues[activeDotIndex];
      this.setState({
        activeDotCoordinate,
        initialGestureCoordinate: activeDotCoordinate,
        pattern: [firstDot],
      }, () => this.snapDot(dotWillSnap),
      );
    }
  }

  panResponderMoveHandler = (e, gestureState) => {
    const { dx, dy } = gestureState;
    const {
      initialGestureCoordinate,
      activeDotCoordinate,
      pattern,
    } = this.state;

    if (activeDotCoordinate == null || initialGestureCoordinate == null) {
      return;
    }

    const endGestureX = initialGestureCoordinate.x + dx;
    const endGestureY = initialGestureCoordinate.y + dy;

    const matchedDotIndex = getDotIndex({ x: endGestureX, y: endGestureY }, this.dots);

    const matchedDot =
      matchedDotIndex != null && this.mappedDotsIndex[matchedDotIndex];

    if (
      matchedDotIndex != null &&
      matchedDot &&
      !this.isAlreadyInPattern(matchedDot)
    ) {
      const newPattern = {
        x: matchedDot.x,
        y: matchedDot.y,
      };

      let intermediateDotIndexes = [];

      if (pattern.length > 0) {
        intermediateDotIndexes = getIntermediateDotIndexes(
          pattern[pattern.length - 1],
          newPattern,
          this.props.containerDimension,
        );
      }

      const filteredIntermediateDotIndexes = intermediateDotIndexes.filter(
        index => !this.isAlreadyInPattern(this.mappedDotsIndex[index]),
      );

      filteredIntermediateDotIndexes.forEach((index) => {
        const mappedDot = this.mappedDotsIndex[index];
        pattern.push({ x: mappedDot.x, y: mappedDot.y });
      });

      pattern.push(newPattern);

      const animateIndexes = [
        ...filteredIntermediateDotIndexes,
        matchedDotIndex,
      ];

      this.setState({
        pattern,
        activeDotCoordinate: this.dots[matchedDotIndex],
      },
      () => {
        if (animateIndexes.length) {
          animateIndexes.forEach(index => this.snapDot(this.snapAnimatedValues[index]));
        }
      },
      );
    } else {
      this.activeLine &&
        this.activeLine.setNativeProps({
          x2: endGestureX.toString(),
          y2: endGestureY.toString(),
        });
    }
  }

  isAlreadyInPattern({ x, y }) {
    const { pattern } = this.state;
    return pattern.find(dot => dot.x === x && dot.y === y) != null;
  }

  isPatternMatched(currentPattern) {
    const { correctPattern } = this.props;
    if (currentPattern.length !== correctPattern.length) {
      return false;
    }
    let matched = true;
    for (let index = 0; index < currentPattern.length; index++) {
      const correctDot = correctPattern[index];
      const currentDot = currentPattern[index];
      if (correctDot.x !== currentDot.x || correctDot.y !== currentDot.y) {
        matched = false;
        break;
      }
    }
    return matched;
  }

  snapDot(animatedValue) {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: SNAP_DOT_RADIUS,
        duration: SNAP_DURATION,
      }),
      Animated.timing(animatedValue, {
        toValue: DEFAULT_DOT_RADIUS,
        duration: SNAP_DURATION,
      }),
    ]).start();
  }

  render() {
    const { containerHeight, containerWidth, hint } = this.props;
    const {
      activeDotCoordinate,
      pattern,
      showError,
      showHint,
    } = this.state;
    let message;
    if (showHint) {
      message = `hint: ${hint}`;
    } else if (showError) {
      message = 'Wrong Pattern';
    }
    return (
      <View style={styles.container}>
        <CustomText
          textStyle={styles.hintText}
          wrapperStyle={styles.hintContainer}
        >
          {message}
        </CustomText>
        <Animated.View {...this.panResponder.panHandlers}>
          <Svg height={containerHeight} width={containerWidth}>
            {this.dots.map((dot, i) => {
              const mappedDot = this.mappedDotsIndex[i];
              const isIncludedInPattern = pattern.find(
                dot => dot.x === mappedDot.x && dot.y === mappedDot.y,
              );
              return (
                <Circle
                  ref={(circle) => { this.dotNodes[i] = circle; }}
                  key={i}
                  cx={dot.x}
                  cy={dot.y}
                  r={DEFAULT_DOT_RADIUS}
                  fill={(showError && isIncludedInPattern && COLORS.SCARLET) || COLORS.PORCELAIN}
                />
              );
            })}
            {pattern.map((startCoordinate, index) => {
              if (index === pattern.length - 1) {
                return null;
              }
              const startIndex = this.mappedDotsIndex.findIndex(dot => (
                dot.x === startCoordinate.x && dot.y === startCoordinate.y
              ));
              const endCoordinate = pattern[index + 1];
              const endIndex = this.mappedDotsIndex.findIndex(
                dot => dot.x === endCoordinate.x && dot.y === endCoordinate.y,
              );

              if (startIndex < 0 || endIndex < 0) {
                return null;
              }

              const actualStartDot = this.dots[startIndex];
              const actualEndDot = this.dots[endIndex];

              return (
                <Line
                  key={`fixedLine${index}`}
                  x1={actualStartDot.x}
                  y1={actualStartDot.y}
                  x2={actualEndDot.x}
                  y2={actualEndDot.y}
                  stroke={showError ? COLORS.SCARLET : COLORS.MINE_SHAFT}
                  strokeWidth="2"
                />
              );
            })}
            {activeDotCoordinate ? (
              <Line
                ref={(component) => { this.activeLine = component; }}
                x1={activeDotCoordinate.x}
                y1={activeDotCoordinate.y}
                x2={activeDotCoordinate.x}
                y2={activeDotCoordinate.y}
                stroke="white"
                strokeWidth="2"
              />
            ) : null}
          </Svg>
        </Animated.View>
      </View>
    );
  }
}
