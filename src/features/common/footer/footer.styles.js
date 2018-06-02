import { StyleSheet } from 'react-native';
import { COLORS } from '../../config';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.AMBER,
  },
  widget: {
    flex: 1,
    textAlign: 'center',
  },
  transfer: {
    flex: 2,
    textAlign: 'center',
  },
});
