import React from 'react';
import {Button, View, Text} from 'react-native';
import HomeScreen from '../home/index';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import AnimationScreen from '../animation';
import AnimationTimingScreen from '../animation/timing';
import AnimationUpdowScreen from '../animation/updow';

function HomeDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Animation" component={AnimationScreen} />
      <Drawer.Screen name="timing" component={AnimationTimingScreen} />
      <Drawer.Screen name="updow" component={AnimationUpdowScreen} />
    </Drawer.Navigator>
  );
}
export default HomeDrawer;
