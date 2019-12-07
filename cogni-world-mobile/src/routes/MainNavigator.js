import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';

import { colors } from '../assets/styles/base';
import MainButton from '../common/components/UI/MainButton';
import screens from '../screens';
import tabNavigators from './TabNavigators';
import { userSignout } from '../store/actions/authActions';
import store from '../store/createStore';

const stackNavigator = createStackNavigator(
  {
    AdminTab: tabNavigators.AdminTabNavigator,
    UserTab: tabNavigators.UserTabNavigator,
    Registration: screens.Registration,
    Signin: screens.Signin,
    Signup: screens.Signup,
    WaitForValidation: screens.WaitForValidation,
  },
  {
    initialRouteName: 'Registration',

    defaultNavigationOptions: ({ navigation }) => {
      // --first, we check which screen it is:
      const screen = navigation.state.routeName;

      // values we will modify then return:
      let headerTitle = '';
      let headerRight = '';
      let headerLeft = '';
      let headerStyle = {
        backgroundColor: colors.primary,
      };
      const headerTitleStyle = {
        color: colors.white,
      };
      const tabBarVisible = true;
      // and so on...

      // For each screen:
      if (screen === 'AdminTab') {
        const { routes, index } = navigation.state;
        const tabScreen = routes[index].routeName;

        headerStyle = {
          backgroundColor: colors.primaryDark,
        };

        headerLeft = null;

        headerRight = (
          <MainButton
            small
            onPress={() => {
              store.dispatch(
                userSignout(() => navigation.replace('Registration')),
              );
              navigation.navigate('Registration');
            }}
          >
            Signout
          </MainButton>
        );

        if (tabScreen === 'tabScreen1') {
          headerTitle = 'tabScreen1';
        }

        if (tabScreen === 'tabScreen2') {
          headerTitle = 'tabScreen2';
        }

        // Return these in case of tab screens
        return {
          tabBarVisible,
          headerStyle,
          headerTitle,
          headerRight,
          headerLeft,
          headerTitleStyle,
          // and so on..
        };
      }

      if (screen === 'UserTab') {
        headerLeft = null;
        headerRight = (
          <MainButton
            small
            style={{ backgroundColor: colors.primaryDark }}
            onPress={() => {
              store.dispatch(
                userSignout(() => navigation.replace('Registration')),
              );
              navigation.navigate('Registration');
            }}
          >
            Signout
          </MainButton>
        );
        return {
          tabBarVisible,
          headerStyle,
          headerTitle,
          headerRight,
          headerLeft,
          headerTitleStyle,
          // and so on..
        };
      }

      // Return these for other screens
      return {
        headerRight,
        headerStyle,
        headerTitleStyle,
      };
    },
  },
);

export default createAppContainer(stackNavigator);
