import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import styles from './styles';
import * as loginAction from '../../redux/action/login';

function Main() {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginAction.logoutWithFireBase());
  return (
    <View style={styles.ctn}>
      <TouchableOpacity onPress={onLogout} style={styles.btn}>
        <Text style={styles.txtBtn}>hello</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Main;
