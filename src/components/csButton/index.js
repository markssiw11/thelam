import React, {useEffect} from 'react';
import {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DEVICE_SCREEN_WIDTH} from '../../utils/deviceHelper';
import csColor from '../../utils/csColor';
const CSButton = ({disable, onPress, title}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, disable ? {opacity: 0.4} : null]}
      onPress={() => true}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
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
    // overflow: 'hidden',
    // width: DEVICE_SCREEN_WIDTH - 40,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default CSButton;
