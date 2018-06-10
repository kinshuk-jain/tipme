import { StyleSheet } from 'react-native';
import { COLORS } from '../../../config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.AMBER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hintContainer: {
    alignItems: 'center',
    paddingBottom: 0,
    height: 20,
    flexWrap: 'wrap',
  },
  hintText: {
    color: COLORS.CURIOUS_BLUE,
    textAlign: 'center',
  },
});
