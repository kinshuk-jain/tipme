import { StyleSheet } from 'react-native';
import { COLORS } from '../../../config';

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
  horizontalRule: {
    marginVertical: 40,
  },
  centerContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  urlbox: {
    marginVertical: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: COLORS.REGENT_GREY,
    color: COLORS.GREY_SILVER,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
});
