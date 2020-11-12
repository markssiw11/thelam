import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const SLIDE_HEIGHT = 0.61 * height;
import TextInputCommon from '../../components/textInput';

function BackGround() {
  return (
    <View style={styles.ctn}>
      <View style={styles.slider}></View>
      <View style={styles.footer}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'white',
            borderTopLeftRadius: 75,
          }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ctn: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: 'cyan',
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
    backgroundColor: 'cyan',
  },
});
export default BackGround;
