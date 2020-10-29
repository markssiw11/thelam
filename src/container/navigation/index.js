import React, {Component, useContext, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './homeStack';
import RunSpring from '../animation/rungSpring';
import Timing from '../animation/timing';
import FloatButton from '../animation/floatButton';
import LoginScreen from '../login/loginScreen';
import {AuthContext, AuthProvider} from './AuthProvider';
import auth from '@react-native-firebase/auth';
import AuthStack from './authStack';
import MainStack from './MainStack';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function NavigationScreen() {
  // const {user, setUser} = useContext(AuthContext);
  const [user, setUser] = useState(false);

  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    console.log(
      '%c useEffect subscriber:',
      'color: #4CAF50 ; font-weight: bold',
    );

    return subscriber; // unsubscribe on unmount
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({tabBarVisible: false})}>
        {!user ? (
          <Tab.Screen name="Login" component={AuthStack} />
        ) : (
          <Tab.Screen name="Main" component={MainStack} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default NavigationScreen;
const isTabBarVisible = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params
    ? route.params.screen
    : 'Home';
  return !['user', 'login'].includes(routeName);
};
