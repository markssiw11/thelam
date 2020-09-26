import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import homeDrawer from './homeDrawer';
import HomScreen from '../home/index';
const Stack = createStackNavigator();

function HomeStack() {
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
        component={HomScreen}
      />
    </Stack.Navigator>
  );
}
export default HomeStack;
