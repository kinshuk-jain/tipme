import { StyleSheet } from 'react-native';
import { COLORS } from '../../../config';

export const styles = StyleSheet.create({
  rule: {
    marginVertical: 10,
    borderBottomColor: COLORS.MINE_SHAFT,
    borderBottomWidth: 1,
    flex: 1,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  halfRule: {
    borderBottomWidth: 1,
    flex: 1,
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
