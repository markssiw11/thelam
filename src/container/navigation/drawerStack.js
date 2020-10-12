import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerScreen from '../drawer';
import UserScreen from '../user';
const Stack = createStackNavigator();

function DrawerStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: '',
          gestureEnabled: true,
          // headerTintColor: '#fff',
          headerShown: false,
          tabBarVisible: false,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="drawer"
        component={DrawerScreen}
      />
      <Stack.Screen name="user" component={UserScreen} />
    </Stack.Navigator>
  );
}
export default DrawerStack;
