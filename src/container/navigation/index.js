import React, {Component, useContext, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AuthStack from './authStack';
import MainStack from './MainStack';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function NavigationScreen({loginStatus}) {
  console.log('loginStatus', loginStatus);
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({tabBarVisible: false})}>
        {!loginStatus ? (
          <Tab.Screen name="Login" component={AuthStack} />
        ) : (
          <Tab.Screen name="Main" component={MainStack} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const mapStateToProps = (state, props) => ({
  loginStatus: state.login.loginStatus,
});
export default connect(mapStateToProps)(NavigationScreen);
const isTabBarVisible = (route) => {
  console.log('route====', route);
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params
    ? route.params.screen
    : 'Home';
  return !['user', 'login'].includes(routeName);
};
