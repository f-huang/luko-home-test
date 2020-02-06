import React from 'react';
import { Platform, View, Text } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Colors from '../constants/Colors';
import InventoryScreen from "../screens/InventoryScreen";
import DefaultScreen from "../screens/DefaultScreen";

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
  });


const DefaultStack = createStackNavigator({
    Default: DefaultScreen,
}, config);


const InventoryStack = createStackNavigator({
    Inventory: InventoryScreen,
}, config);

const tabNavigator = createBottomTabNavigator({
    Protection: DefaultStack,
    Insurance: DefaultStack,
    Inventory: InventoryStack,
    Profile: DefaultStack
}, {
    tabBarOptions: {
    activeTintColor: Colors.activeTabColor,
    inactiveTintColor: Colors.inactiveTabColor,
  }
});

export default createAppContainer(tabNavigator);