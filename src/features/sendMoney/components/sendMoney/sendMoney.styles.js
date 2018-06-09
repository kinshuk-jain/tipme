import { StyleSheet, Platform } from 'react-native';
import { COLORS, FONT } from '../../../config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingTop: 10,
  },
  scroller: {
    flex: 1,
    marginTop: 0,
  },
  textInput: {
    borderWidth: 1,
    borderColor: COLORS.CURIOUS_BLUE,
    paddingVertical: 5,
    paddingHorizontal: 5,
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  selectInput: {
    ...Platform.select({
      ios: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.SHARK,
        paddingBottom: 15,
      },
    }),
    paddingHorizontal: 5,
    marginHorizontal: 10,
  },
  amountView: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  alignRight: {
    textAlign: 'right',
  },
  dotStyle: {
    fontWeight: 'bold',
    fontSize: FONT.SIZE_LARGE,
  },
  heading: {
    margin: 10,
    fontWeight: '500',
  },
  pickerStyle: {
    width: 200,
    borderWidth: 1,
  },
  iconButton: {
    marginTop: 40,
    height: 40,
  },
  buttonText: {
    color: COLORS.WHITE,
  },
});
