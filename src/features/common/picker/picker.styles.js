import { StyleSheet } from 'react-native';
import { COLORS, FONT } from '../../config';

export const styles = StyleSheet.create({
  viewContainer: {
    alignSelf: 'stretch',
    marginTop: 5,
    marginBottom: 15,
  },
  chevron: {
    width: 15,
    height: 15,
    backgroundColor: 'transparent',
    borderTopWidth: 1.5,
    borderTopColor: '#D0D4DB',
    borderRightWidth: 1.5,
    borderRightColor: '#D0D4DB',
  },
  chevronUp: {
    transform: [{ translateY: 17 }, { rotate: '-45deg' }],
  },
  chevronDown: {
    transform: [{ translateY: 8 }, { rotate: '135deg' }],
  },
  chevronActive: {
    borderTopColor: COLORS.AZURE_RADIANCE,
    borderRightColor: COLORS.AZURE_RADIANCE,
  },
  icon: {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderTopWidth: 4,
    borderTopColor: COLORS.STACK,
    borderRightWidth: 5,
    borderRightColor: 'transparent',
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
    width: 0,
    height: 0,
    top: 10,
    right: 20,
  },
  modalViewTop: {
    flex: 1,
  },
  modalViewMiddle: {
    height: 44,
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.PORCELAIN,
    borderTopWidth: 0.5,
    borderTopColor: COLORS.STACK,
  },
  modalViewBottom: {
    height: 215,
    justifyContent: 'center',
    backgroundColor: COLORS.GREY_MYSTIC,
  },
  done: {
    color: COLORS.AZURE_RADIANCE,
    fontWeight: '500',
    padding: 10,
    fontSize: FONT.SIZE_LARGE,
  },
  underline: {
    borderTopWidth: 1,
    borderTopColor: COLORS.MINE_SHAFT,
    marginHorizontal: 4,
  },
  extraRightPadding: {
    paddingRight: 20,
  },
});
