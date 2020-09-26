import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './homeStack';
import DrawerStack from './drawerStack';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function AoScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}
function BScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}
function NavigationScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="ao" component={AoScreen} />
        <Tab.Screen name="drawerStack" component={DrawerStack} />

        {/* <Tab.Screen name="Home" component={BScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default NavigationScreen;
