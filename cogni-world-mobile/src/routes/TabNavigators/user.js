import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import { Icon } from 'native-base';

import { colors, sizes, fontSizes, fontTypes } from '../../assets/styles/base';
import screens from '../../screens';

export default createMaterialTopTabNavigator(
  {
    // --specific navigationOptions for each tab
    CanteenTabScreen: {
      screen: screens.UserScreens.Canteen,
      navigationOptions: {
        tabBarLabel: 'Canteen',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="MaterialCommunityIcons"
            name="cupcake"
            size={24}
            style={{ color: tintColor, minWidth: 50 }}
          />
        ),
      },
    },
    MeTabScreen: {
      screen: screens.UserScreens.Me,
      navigationOptions: {
        tabBarLabel: 'Me',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="Ionicons"
            name="md-person"
            size={24}
            style={{ color: tintColor, minWidth: 50 }}
          />
        ),
      },
    },
  },
  {
    // Config

    initialRouteName: 'CanteenTabScreen',
    order: ['CanteenTabScreen', 'MeTabScreen'],
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: false,

    tabBarOptions: {
      showIcon: true,
      upperCaseLabel: false,
      activeTintColor: colors.white,
      inactiveTintColor: colors.secondary,

      style: {
        backgroundColor: colors.primary,
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
