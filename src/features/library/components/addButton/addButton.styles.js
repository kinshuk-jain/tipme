import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../config';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.CURIOUS_BLUE,
    width: Dimensions.get('window').width - 80,
    borderRadius: 10,
  },
  buttonText: {
    color: COLORS.WHITE,
    marginLeft: 10,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
