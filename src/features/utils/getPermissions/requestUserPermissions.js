import { PermissionsAndroid, Platform } from 'react-native';
import Contacts from 'react-native-contacts';

export const checkContactReadPermission = () => {
  if (Platform.OS === 'ios') {
    let hasPermission = true;
    Contacts.checkPermission((err, permission) => {
      if (err) throw err;

      // Contacts.PERMISSION_AUTHORIZED || Contacts.PERMISSION_UNDEFINED ||
      // Contacts.PERMISSION_DENIED
      if (permission !== 'authorized') {
        hasPermission = false;
      }
    });
    return new Promise(() => hasPermission);
  } else if (Platform.OS === 'android') {
    return PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_CONTACTS);
  }
  return new Promise(() => false);
};

export const requestContactReadPermission = () => {
  if (Platform.OS === 'ios') {
    let hasPermission = true;
    Contacts.requestPermission((err, permission) => {
      if (err) throw err;
      if (permission !== 'authorized') {
        hasPermission = false;
      }
    });
    return new Promise(() => hasPermission);
  } else if (Platform.OS === 'android') {
    return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS)
      .then((permission) => {
        if (permission !== PermissionsAndroid.RESULTS.GRANTED) {
          return false;
        }
        return true;
      });
  }
  return new Promise(() => false);
};
