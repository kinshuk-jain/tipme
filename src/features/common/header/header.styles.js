import { StyleSheet, Platform } from 'react-native';
import { getStatusBarHeight, COLORS } from '../../config';

export const HEADER_COLOR = COLORS.AMBER;

export const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        position: 'relative',
        top: getStatusBarHeight(),
      },
    }),
  },
  outerContainer: {
    backgroundColor: HEADER_COLOR,
    borderBottomColor: COLORS.CONCRETE,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    height: Platform.OS === 'ios' ? 70 : 70 - getStatusBarHeight(),
  },
});
