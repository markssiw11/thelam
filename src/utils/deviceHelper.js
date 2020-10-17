import {Dimensions, Platform, StatusBar} from 'react-native';

export const DEVICE_SCREEN_WIDTH = Dimensions.get('screen').width;
export const DEVICE_SCREEN_HEIGHT = Platform.select({
  ios: Dimensions.get('screen').height,
  android: Dimensions.get('window').height - StatusBar.currentHeight,
});
