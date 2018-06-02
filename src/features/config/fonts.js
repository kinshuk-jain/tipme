import { Platform } from 'react-native';

export const FONT = {
  SIZE_SMALL: 14,
  SIZE_MEDIUM: 16,
  SIZE_LARGE: 18,
  FAMILY: Platform.select({
    ios: 'AvenirNext-Regular',
    android: 'Roboto',
  }),
};
