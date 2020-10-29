import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {logout} from '../navigation/AuthProvider';
function Main() {
  return (
    <View style={styles.ctn}>
      <TouchableOpacity onPress={logout} style={styles.btn}>
        <Text style={styles.txtBtn}>hello</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Main;
