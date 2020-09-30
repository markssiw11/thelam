import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import homeDrawer from './homeDrawer';
import HomScreen from '../home/index';
const Stack = createStackNavigator();
import UserScreen from '../user';
import CSBackButton from '../../components/csBackButton';
function HomeStack() {
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
        name="drawer"
        component={HomScreen}
      />
      <Stack.Screen
        options={{
          title: 'Thông tin cá nhân',
          gestureEnabled: true,
          // headerTintColor: '#fff',
          // headerStyle: {
          //   backgroundColor: '#f4511e',
          // },
          headerLeft: <CSBackButton />,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="user"
        component={UserScreen}
      />
    </Stack.Navigator>
  );
}
export default HomeStack;
