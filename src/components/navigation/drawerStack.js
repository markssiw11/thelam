import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerScreen from '../drawer';
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
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="drawer"
        component={DrawerScreen}
      />
    </Stack.Navigator>
  );
}
export default DrawerStack;
