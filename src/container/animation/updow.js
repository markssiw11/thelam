import React, {Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {mix} from 'react-native-redash';
import color from '../../utils/color';
const timing = 1000;

function UpDownScreen() {
  const [open, setOpen] = useState(false);
  const turnArrow = () => {
    console.log('onPress');
    setOpen(!open);
  };
  // const transition = useTransition(open);
  const rotateZ = mix(open, Math.PI, 0);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touch} onPress={turnArrow}>
        <Text style={styles.text}>touch</Text>
      </TouchableOpacity>
      <Animated.View
        style={{
          transform: [{rotateZ}],
        }}>
        <Icon name="arrow-up" size={20} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touch: {
    backgroundColor: color.vars.green,
    borderRadius: 10,
  },
  text: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: 'white',
  },
});

export default UpDownScreen;
