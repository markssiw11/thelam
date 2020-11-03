import React from 'react';
import {StyleSheet, View, Modal} from 'react-native';
import LottieView from 'lottie-react-native';
import {
  DEVICE_SCREEN_WIDTH,
  DEVICE_SCREEN_HEIGHT,
} from '../../utils/deviceHelper';

export default class BasicExample extends React.Component {
  onRequestClose = () => {};
  render() {
    const {isLoading} = this.props;
    return (
      <Modal
        visible={isLoading}
        animationType="fade"
        onRequestClose={this.onRequestClose}
        transparent>
        {isLoading ? (
          <View style={styles.ctn}>
            <LottieView
              style={styles.lottieView}
              ref={(animation) => {
                this.animation = animation;
              }}
              autoPlay
              loop
              // progress={progress}
              source={require('../../../assets/animation/loading2.json')}
            />
          </View>
        ) : null}
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  lottieView: {
    width: 150,
    overflow: 'visible',
  },
  ctn: {
    flex: 1,
    position: 'absolute',
    width: DEVICE_SCREEN_WIDTH,
    height: DEVICE_SCREEN_HEIGHT,
    backgroundColor: 'rgba(88, 101, 94, 0.4)',
    overflow: 'visible',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
