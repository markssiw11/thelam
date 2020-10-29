import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import TextInputCommon from '../../components/textInput';
import styles from './styles';
import {register} from '../navigation/AuthProvider';
import {modelRegister} from './model';
import * as action from '../../redux/action/login/index';
function LoginScreen() {
  const [form, setForm] = useState(modelRegister);
  const dispatch = useDispatch();
  const onLogout = () => dispatch(action.loginWithFireBase(form));
  const formatText = (text, key) => {
    const newForm = {...form};
    newForm[key] = text;
    return setForm(newForm);
  };
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
      <TextInputCommon
        placeholder="Xác nhận mật khẩu"
        icon="unlock"
        value={form?.confirmPass}
        onPress={(text) => formatText(text, 'confirmPass')}
      />
      <TouchableOpacity onPress={onLogout} style={styles.btn}>
        <Text style={styles.btnText}>Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;
