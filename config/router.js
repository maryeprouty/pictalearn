/**
 * Router for app, beginning at registration
 */
import { createStackNavigator } from 'react-navigation-stack';
import { flipY, fromLeft } from 'react-navigation-transitions';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';

export const RootStack = createStackNavigator( {
      LoginScreen: {
        screen: LoginScreen,
      },
      RegisterScreen: {
          screen: RegisterScreen,

      },
      HomeScreen: {
          screen: HomeScreen,
          navigationOptions: {
            headerLeft: null,
          }
      }
    },  
    {
      initialRouteName: 'LoginScreen',
      transitionConfig: () => flipY(1000),
    }
);