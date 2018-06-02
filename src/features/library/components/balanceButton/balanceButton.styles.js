import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONT } from '../../../config';

const common = {
  justifyContent: 'center',
  alignItems: 'center',
};

const commonText = {
  color: COLORS.SHARK,
};

export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.GREY_MYSTIC,
    width: Dimensions.get('window').width - 20,
    borderRadius: 5,
  },
  logo: {
    ...common,
    flex: 1,
  },
  status: {
    ...common,
    flex: 1,
  },
  info: {
    ...common,
    flex: 2,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  info_header: {
    ...commonText,
    fontSize: FONT.SIZE_SMALL,
  },
  info_text: {
    ...commonText,
    fontSize: FONT.SIZE_LARGE,
  },
  info_caption: {
    ...commonText,
    fontSize: FONT.SIZE_MEDIUM,
  },
  status_failed: {
    color: COLORS.SCARLET,
  },
  status_success: {
    color: COLORS.FOREST_GREEN,
  },
});
