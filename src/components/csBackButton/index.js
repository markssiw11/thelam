import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationActions, withNavigation} from '@react-navigation/compat';

function CSBackButton({icon, navigation}) {
  const onPress = () => {
    navigation.dispatch(NavigationActions.back());
  };
  return (
    <TouchableOpacity style={{width: 40}} onPress={onPress}>
      <Icon
        style={{
          paddingLeft: 10,
          paddingTop: 5,
        }}
        solid
        name={icon}
        color="black"
        size={35}
      />
    </TouchableOpacity>
  );
}
export default withNavigation(CSBackButton);
