import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Text } from 'react-native';
import React from 'react';

import { colors } from '../assets/styles/base';
import screens from '../screens';
import tabNavigators from './TabNavigators';

const loadStackNavigator = ({ isAuthenticated, isAdmin }) =>
  createStackNavigator(
    {
      AdminTab: tabNavigators.AdminTabNavigator,
      UserTab: tabNavigators.UserTabNavigator,
      Registration: screens.Registration,
      Signin: screens.Signin,
      Signup: screens.Signup,
      WaitForValidation: screens.WaitForValidation,
    },
    {
      initialRouteName: !isAuthenticated
        ? 'Registration'
        : isAdmin
          ? 'UserTab'
          : 'AdminTab',

      defaultNavigationOptions: ({ navigation }) => {
        // --first, we check which screen it is:
        const screen = navigation.state.routeName;

        // values we will modify then return:
        const headerTitle = '';
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

          if (tabScreen === 'tabScreen1') {
            headerRight = (
              <Text
                style={{
                  marginRight: 20,
                  fontSize: 20,
                  color: colors.secondary,
                }}
              />
            );
          }

          if (tabScreen === 'tabScreen2') {
            headerRight = (
              <Text
                style={{
                  marginRight: 20,
                  fontSize: 20,
                  color: colors.secondary,
                }}
              />
            );
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

const App = props => {
  const RoutesContainer = createAppContainer(loadStackNavigator(props));
  return <RoutesContainer />;
};

export default App;
