import React from 'react';
import { Platform, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Colors from '../constants/Colors';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
  });


class DefaultScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>DefaultScreen</Text>
        </View>
      );
    }
}
  
class InventoryScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Inventory</Text>
        </View>
      );
    }
}
  
const DefaultStack = createStackNavigator({
    Default: DefaultScreen,
}, config);

DefaultStack.navigationOptions = {
    tabBarLabels: "Default",
};
DefaultStack.path = '';

const InventoryStack = createStackNavigator({
    Inventory: InventoryScreen,
}, config);
InventoryStack.path = '';

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