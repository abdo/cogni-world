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
      const { routes, index, routeName } = navigation.state;

      const mainScreen = routeName;
      const internalScreen = routes && routes[index].routeName;
      // Main Screen is actually the name of the screen
      // except if we are in the tab, then it will be the tab name (ex: UserTab)
      // then, internalScreen will be actually the name of the screen

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

      if (internalScreen === 'CanteenTabScreen') {
        headerTitle = 'Canteen 🍟';
      }

      if (internalScreen === 'MeTabScreen') {
        headerTitle = 'Me 🕺';
      }

      if (mainScreen === 'AdminTab' || mainScreen === 'UserTab') {
        headerRight = (
          <MainButton
            small
            style={{
              backgroundColor:
                mainScreen === 'AdminTab' ? colors.primary : colors.primaryDark,
            }}
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
      }

      // For each screen:
      if (mainScreen === 'AdminTab') {
        headerStyle = {
          backgroundColor: colors.primaryDark,
        };

        headerLeft = null;
      }

      if (mainScreen === 'UserTab') {
        headerLeft = null;
      }

      // Return these for other screens
      return {
        tabBarVisible,
        headerStyle,
        headerTitle,
        headerRight,
        headerLeft,
        headerTitleStyle,
      };
    },
  },
);

export default createAppContainer(stackNavigator);
