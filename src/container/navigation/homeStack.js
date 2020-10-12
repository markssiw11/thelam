import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
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
          title: 'Chỉnh sửa thông tin cá nhân',
          headerLeft: (props) => <CSBackButton icon="angle-left" />,
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

function getTabBarVisible(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Home';

  if (routeName === 'Details') {
    return false;
  }
  return true;
}
export default HomeStack;
