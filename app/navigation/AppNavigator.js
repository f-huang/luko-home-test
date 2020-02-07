import React from 'react';
import { Platform, Button } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Colors from '../constants/Colors';
import InventoryScreen from "../screens/InventoryScreen";
import DefaultScreen from "../screens/DefaultScreen";
import CreateInventoryItemScreen from "../screens/CreateInventoryItemScreen";

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});


const DefaultStack = createStackNavigator({
  Default: DefaultScreen,
}, config);


const InventoryStack = createStackNavigator({
  Inventory: InventoryScreen,
  CreateInventoryItem: {
    screen: CreateInventoryItemScreen,
  }
}, config);

InventoryStack.path = '';

const TabNavigator = createBottomTabNavigator({
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


export default createAppContainer(TabNavigator);