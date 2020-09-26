import React, {Component, useEffect, useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing,
} from 'react-native';

const timing = 4000;

function Animations() {
  // const [spinValue, setSpinValue] = useState(new Animated.Value(0));
  const spinValue = new Animated.Value(0);
  useEffect(() => {
    spin();
  });
  const spin = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: timing,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => spin());
  };
  const spinInterpolate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <View style={styles.container}>
      <Animated.Image
        style={{
          width: 227,
          height: 200,
          transform: [{rotate: spinInterpolate}],
        }}
        source={require('../../../assets/image/vip1.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Animations;
