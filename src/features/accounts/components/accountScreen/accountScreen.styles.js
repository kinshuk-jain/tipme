import { StyleSheet, Platform } from 'react-native';
// import { COLORS } from '../../../config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroller: {
    flex: 1,
    marginTop: 20,
    ...Platform.select({
      android: {
        marginTop: 0,
      },
    }),
  },
  label: {
    flex: 1,
    marginLeft: 10,
  },
  labelText: {
    fontWeight: 'bold',
  },
  transaction: {
    marginTop: 15,
  },
});
