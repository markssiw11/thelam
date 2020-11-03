import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';

import TextInputCommon from '../../components/textInput';
import styles from './styles';
import {login} from '../navigation/AuthProvider';
import * as action from '../../redux/action/login/index';
import Lottie from '../../components/lottie/index';
import ModalScreen from '../../components/modal';
function LoginScreen({navigation, userName, isLoading, error}) {
  const [form, setForm] = useState({});
  useEffect(() => {
    const newForm = {...form};
    newForm.email = userName;
    setForm(newForm);
  }, [userName]);
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
      <Lottie isLoading={isLoading} />
      <TextInputCommon
        placeholder="Email"
        icon="envelope-o"
        value={form?.email}
        onPress={(text) => formatText(text, 'email')}
      />
      <TextInputCommon
        placeholder="Mật khẩu"
        icon="lock"
        value={form?.pass}
        onPress={(text) => formatText(text, 'pass')}
        iconSize={25}
      />
      <TouchableOpacity onPress={onLogin} style={styles.btn}>
        <Text style={styles.btnText}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressRegister}>
        <Text style={[styles.btnText, {color: '#000'}]}>Đăng ký</Text>
      </TouchableOpacity>
      <ModalScreen open={!!error} error={error} />
    </View>
  );
}
const mapStateToProps = (state, props) => ({
  isLoading: state.login.isLoading,
  userName: state.login?.data?.email,
  error: state.login?.error,
});

export default connect(mapStateToProps)(LoginScreen);
