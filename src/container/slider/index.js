import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import csColor from '../../utils/csColor';
import Lottie from '../../components/lottie/index';
import {connect} from 'react-redux';

const sliderWidth = Dimensions.get('screen').width;
const sliderHight = Dimensions.get('screen').height;

function Slider({}) {
  return (
    <View style={styles.ctn}>
      <View style={styles.slider}></View>
      <View style={styles.footer}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'cyan',
          }}></View>
        <View style={styles.end}></View>
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
    height: 0.61 * sliderHight,
    backgroundColor: 'cyan',
    borderBottomRightRadius: 75,
  },
  footer: {flex: 1},
  end: {
    borderTopLeftRadius: 75,
    backgroundColor: 'white',
    flex: 1,
  },
});

export default Slider;
