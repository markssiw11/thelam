import React from 'react';
import {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {DEVICE_SCREEN_WIDTH} from '../../utils/deviceHelper';
import csColor from '../../utils/csColor';

// Within your render function
class GradientFacebook extends Component {
  render() {
    const {colors = [], style, title, onPress} = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={[styles.btn, {...style}]}>
        <LinearGradient colors={colors} style={styles.linearGradient}>
          <Text style={styles.buttonText}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
export default GradientFacebook;

// Later on in your styles..
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  btn: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
    overflow: 'hidden',
    width: DEVICE_SCREEN_WIDTH - 40,
    flexDirection: 'row',
  },
});
