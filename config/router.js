/**
 * Router for app, beginning at registration
 */
import { createStackNavigator } from 'react-navigation-stack';

import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';

export const RootStack = createStackNavigator( {
      RegisterScreen: {
          screen: RegisterScreen,
      },
      HomeScreen: {
          screen: HomeScreen,
      }
    },  
    {
      initialRouteName: 'RegisterScreen',
    }
);