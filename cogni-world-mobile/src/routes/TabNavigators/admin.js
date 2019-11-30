import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import React from 'react';

import { Icon } from 'native-base';
import {
  colors, sizes, fontSizes, fontTypes,
} from '../../assets/styles/base';
import screens from '../../screens';


export default createMaterialTopTabNavigator(
  {
    // --specific navigationOptions for each tab
    tabScreen1: {
      screen: screens.AdminScreens.Test1,
      navigationOptions: {
        tabBarLabel: 'AdminTab1',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="EvilIcons"
            name="gear"
            size={24}
            style={{ color: tintColor, minWidth: 50 }}

          />
        ),
      },
    },
    tabScreen2: {
      screen: screens.AdminScreens.Test2,
      navigationOptions: {
        tabBarLabel: 'AdminTab2',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="EvilIcons"
            name="gear"
            size={24}
            style={{ color: tintColor, minWidth: 50 }}
          />
        ),
      },
    },
  },
  {
    // Config

    initialRouteName: 'tabScreen1',
    order: ['tabScreen1', 'tabScreen2'],
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: false,

    tabBarOptions: {
      showIcon: true,
      upperCaseLabel: false,
      activeTintColor: colors.white,
      inactiveTintColor: colors.secondary,

      style: {
        backgroundColor: colors.primaryDark,
        height: sizes.bottomTabHeight,
        borderTopWidth: 0.5,
        borderTopColor: '#00000000',
      },
      labelStyle: {
        fontSize: fontSizes.sm,
        fontFamily: fontTypes.mainBold,
      },
      indicatorStyle: {
        backgroundColor: colors.secondary,
      },
    },
  },
);
