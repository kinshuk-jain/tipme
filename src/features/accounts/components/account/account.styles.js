import { StyleSheet } from 'react-native';
import { COLORS } from '../../../config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  scroller: {
    flex: 1,
    marginTop: 0,
  },
  label: {
    flex: 1,
    marginLeft: 10,
  },
  labelText: {
    fontWeight: 'bold',
  },
  transaction: {
    marginVertical: 15,
  },
});
