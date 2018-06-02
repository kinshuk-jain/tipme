import { StyleSheet, Platform } from 'react-native';
import { getStatusBarHeight, COLORS } from '../../config';

export const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  outerContainer: {
    backgroundColor: COLORS.PEACH_CREAM,
    borderBottomColor: COLORS.CONCRETE,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    height: Platform.OS === 'ios' ? 70 : 70 - getStatusBarHeight(),
    ...Platform.select({
      ios: {
        marginTop: getStatusBarHeight(),
      },
    }),
  },
});
