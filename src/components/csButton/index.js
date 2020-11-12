import React, {useEffect} from 'react';
import {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {DEVICE_SCREEN_WIDTH} from '../../utils/deviceHelper';
import csColor from '../../utils/csColor';
const CSButton = ({disable, onPress, title, style}) => {
  const opacity = disable ? {opacity: 0.6, ...styles.btn, ...style} : {};
  const TouchCmp = disable ? TouchableWithoutFeedback : TouchableOpacity;
  return (
    <Animated.View style={opacity}>
      <TouchCmp style={[styles.btn, {...style}]} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchCmp>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Cochin',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    // backgroundColor: 'transparent',
  },
  btn: {
    marginHorizontal: 20,
    backgroundColor: csColor.vars.csDodgerblue,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: DEVICE_SCREEN_WIDTH - 20,
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

export default CSButton;
