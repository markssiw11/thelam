import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import color from '../../utils/color';
import Modal from 'react-native-modal';
import {TouchableOpacity} from 'react-native-gesture-handler';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import {BlurView, VibrancyView} from '@react-native-community/blur';
function DrawerScreen({open, onPress}) {
  return (
    <View style={styles.ctn}>
      <Modal
        isVisible={open}
        onSwipeComplete={onPress}
        swipeDirection="left"
        onBackdropPress={onPress}
        // animationOut="slideOutLeft"
        animationOutTiming={1}
        animationIn="slideInLeft">
        <View style={styles.drawerCtn}>
          <View style={styles.profile}>
            <BlurView
              reducedTransparencyFallbackColor="white"
              blurAmount={10}
              style={styles.background}
              blurType="dark"
            />
            <View style={styles.avatar}>
              <Text style={styles.textAvatar}>L</Text>
            </View>
            <View style={styles.moreInfo}>
              <Text style={styles.textMoreInfo}>Long nguyễn</Text>
              <Text style={styles.textMoreInfo}>0 Điểm</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const diameter = 70;
const styles = StyleSheet.create({
  drawerCtn: {
    width: width * 0.7,
    height: height,
    backgroundColor: 'rgba(249, 246, 247, 0.99)',
    left: -20,
  },
  ctn: {
    flex: 1,
    backgroundColor: 'rgba(230, 230, 230, 1)',
    position: 'absolute',
  },
  profile: {
    height: 200,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: diameter,
    height: diameter,
    borderRadius: diameter / 2,
    backgroundColor: 'purple',
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
    position: 'absolute',
  },
  textAvatar: {
    color: 'white',
    fontSize: 45,
  },
  textMoreInfo: {
    fontSize: 18,
    color: 'white',
  },
  moreInfo: {
    marginLeft: 110,
    position: 'absolute',
  },
  background: {
    backgroundColor: 'hsla(267, 68%, 61%, 0.88)',
    height: 200,
    width: width * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    color: 'white',
    // opacity: 0.1,
    fontSize: 120,
    shadowColor: 'white',
    shadowOffset: {
      width: 30,
      height: 30,
    },
    shadowOpacity: 0.9,
    shadowRadius: 6,

    elevation: 13,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  flex: {
    flex: 1,
  },
});
export default DrawerScreen;
