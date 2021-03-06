import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
type Props = {
  placeholder?: string,
  value: string | number | null,
  icon?: string,
  iconColor?: string,
  keyboardType?: String,
  iconSize?: number,
  onPress?: () => avoid,
};

class TextInputCommon extends Component<Props> {
  render() {
    const {
      placeholder,
      value,
      onPress,
      icon,
      iconColor,
      iconSize,
      keyboardType,
    } = this.props;
    return (
      <View style={styles.btn}>
        {icon ? (
          <View style={styles.iconCtn}>
            <Icon name={icon} color={iconColor} size={iconSize || 20} />
          </View>
        ) : null}
        <View style={{flex: 1}}>
          <TextInput
            autoCorrect={false}
            autoCapitalize={'none'}
            icon="eye"
            keyboardType={keyboardType}
            style={styles.textInput}
            numberOfLines={1}
            placeholder={placeholder}
            value={value}
            onChangeText={(text) => onPress(text, value)}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  btn: {
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#a9a9a9',
  },
  iconCtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    paddingLeft: 5,
    // backgroundColor: '#E7E7E7',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  textInput: {
    height: 40,
    // backgroundColor: '#E7E7E7',
    borderRadius: 5,
    // borderBottomWidth: 1,
  },
});

export default TextInputCommon;
