/**
 * Router for app, beginning at registration
 */
import { createStackNavigator } from 'react-navigation-stack';
import { flipY, fromLeft } from 'react-navigation-transitions';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';

const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];
 
  // Custom transitions go here
  if (prevScene
    && prevScene.route.routeName === 'LoginScreen'
    && nextScene.route.routeName === 'RegisterScreen') {
    return flipY(1000);
  } 
  return fromLeft();
}

export const RootStack = createStackNavigator( {
      LoginScreen: {
        screen: LoginScreen,
      },
      RegisterScreen: {
          screen: RegisterScreen,

      },
      HomeScreen: {
          screen: HomeScreen,
          // navigationOptions: {
          //   headerLeft: null,
          // }
      }
    },  
    {
      initialRouteName: 'LoginScreen',
      transitionConfig: (nav) => handleCustomTransition(nav)
    }
);