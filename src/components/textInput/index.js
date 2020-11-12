import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DEVICE_SCREEN_WIDTH} from '../../utils/deviceHelper';
type Props = {
  placeholder?: string,
  value: string | number | null,
  icon?: string,
  iconColor?: string,
  keyboardType?: String,
  iconSize?: number,
  onPress?: () => avoid,
  onBlur?: () => avoid,
  onChangeText?: () => avoid,
  style?: any,
  touched?: string,
};

class TextInputCommon extends Component<Props> {
  render() {
    const {
      icon,
      iconColor,
      iconSize,
      style,
      iconRight,
      onPressIconRight,
      iconRightSize,
      iconRightStyle,
      iconRightColor,
    } = this.props;
    return (
      <View style={[styles.btn, {...style}]}>
        {icon ? (
          <View style={styles.iconCtn}>
            <Icon name={icon} color={iconColor} size={iconSize || 20} />
          </View>
        ) : null}
        <View style={{flex: 1}}>
          <TextInput style={styles.textInput} {...this.props} />
        </View>
        {iconRight && (
          <TouchableOpacity
            onPress={onPressIconRight}
            style={[styles.iconCtn, {...iconRightStyle}]}>
            <Icon
              name={iconRight}
              color={iconRightColor}
              size={iconRightSize || 15}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  btn: {
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#a9a9a9',
    width: DEVICE_SCREEN_WIDTH - 20,
  },
  iconCtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    paddingLeft: 5,
    marginBottom: 5,
  },
  textInput: {
    height: 40,
    borderRadius: 5,
  },
});

export default TextInputCommon;
