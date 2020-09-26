import React from 'react';
import {StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

export default class BasicExample extends React.Component {
  render() {
    const {refreshingHeight} = this.props;
    return (
      <LottieView
        style={[styles.lottieView, {height: refreshingHeight}]}
        ref={(animation) => {
          this.animation = animation;
        }}
        autoPlay
        // progress={progress}
        source={require('../../../assets/animation/loading.json')}
      />
    );
  }
}
const styles = StyleSheet.create({
  lottieView: {
    // Use refreshingHeight instead of hardcoded value
    position: 'absolute',
    top: -30,
    left: 0,
    right: 0,
  },
});
