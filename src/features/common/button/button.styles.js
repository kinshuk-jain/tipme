import { StyleSheet } from 'react-native';
// import { COLORS } from '../../config';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: 50,
    marginTop: 10,
  },
  disabled: {
    opacity: 0.5,
  },
});
