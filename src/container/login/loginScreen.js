import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';

import TextInputCommon from '../../components/textInput';
import styles from './styles';
import {login} from '../navigation/AuthProvider';
import * as action from '../../redux/action/login/index';

function LoginScreen({navigation}) {
  const [form, setForm] = useState({});
  const formatText = (text, key) => {
    const newForm = {...form};
    newForm[key] = text;
    return setForm(newForm);
  };
  const onPressRegister = () => {
    navigation.navigate('register');
  };
  const dispatch = useDispatch();
  const onLogin = () => dispatch(action.loginWithFireBase(form));
  return (
    <View style={styles.ctn}>
      <TextInputCommon
        placeholder="Email"
        icon="envelope-o"
        value={form?.email}
        onPress={(text) => formatText(text, 'email')}
      />
      <TextInputCommon
        placeholder="Mật khẩu"
        icon="unlock"
        value={form?.pass}
        onPress={(text) => formatText(text, 'pass')}
      />
      <TouchableOpacity onPress={onLogin} style={styles.btn}>
        <Text style={styles.btnText}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressRegister}>
        <Text style={[styles.btnText, {color: '#000'}]}>Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;
