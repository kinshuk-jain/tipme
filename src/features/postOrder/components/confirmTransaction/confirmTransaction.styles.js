import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONT } from '../../../config';

const arrowComponentStyles = {
  arrowComponent: {
    flexDirection: 'row',
    marginTop: 10,
    paddingVertical: 10,
  },
  arrowTextWrapper: {
    marginLeft: 10,
    minWidth: 80,
  },
};

const buttonStyles = {
  button: {
    backgroundColor: COLORS.CURIOUS_BLUE,
    width: Dimensions.get('window').width - 80,
    borderRadius: 10,
  },
  buttonText: {
    color: COLORS.WHITE,
    marginLeft: 10,
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
};

const receiverSectionStyles = {
  receiverContainer: {
    marginVertical: 20,
  },
  receiver: {
    flexDirection: 'row',
    padding: 10,
    height: 120,
  },
  receiverName: {
    paddingLeft: 20,
  },
};

const containerStyles = {
  outerContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 0,
    backgroundColor: COLORS.WHITE,
  },
  innerContainer: {
    flex: 1,
    paddingTop: 10,
  },
};

export const styles = StyleSheet.create({
  heading: {
    fontSize: FONT.SIZE_LARGE,
  },
  boldText: {
    fontWeight: '600',
  },
  ...containerStyles,
  ...arrowComponentStyles,
  ...receiverSectionStyles,
  ...buttonStyles,
});
