import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import LoginScreen from '../login/loginScreen';
function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: '',
          gestureEnabled: true,
          headerShown: false,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="login"
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
