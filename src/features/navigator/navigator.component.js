import { createStackNavigator } from 'react-navigation';
import { routes } from './routes';

export const Navigator = createStackNavigator(routes, {
  initialRouteName: 'Home',
});
