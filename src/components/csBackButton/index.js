import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function CSBackButton() {
  console.log('back----------');
  return (
    <TouchableOpacity>
      <Icon
        style={{
          paddingLeft: 10,
          paddingTop: 3,
        }}
        name="search"
        color="white"
        size={20}
      />
    </TouchableOpacity>
  );
}
export default CSBackButton;
