import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';

import TextInputCommon from '../../components/textInput';
import styles from './styles';
import {login} from '../navigation/AuthProvider';
import * as action from '../../redux/action/login/index';
import Lottie from '../../components/lottie/index';
import ModalScreen from '../../components/modal';
import Separator from '../../components/separator';
import GradientFacebook from '../../components/gradient/login';
import CSButton from '../../components/csButton';
function LoginScreen({navigation, userName, isLoading, error}) {
  const [form, setForm] = useState({});
  const [viewPass, setViewPass] = useState(true);
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    if (!form.email) {
      const newForm = {...form};
      newForm.email = userName;
      setForm(newForm);
    }
    const isValid = !!form.email && !!form.pass;
    setDisable(!isValid);
  }, [userName, form]);
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
  const onDismissError = () => dispatch(action.dismissError());
  console.log('disable====', disable);
  return (
    <View style={styles.ctn}>
      <Lottie isLoading={isLoading} />
      <View style={styles.loginCtn}>
        <View style={styles.headerCtn}>
          <Text style={styles.headerTxt}>Đăng nhập</Text>
        </View>
        <View style={styles.loginInput}>
          <TextInputCommon
            style={{marginHorizontal: 20}}
            placeholder="Email"
            icon="envelope-o"
            value={form?.email}
            onPress={(text) => formatText(text, 'email')}
          />
          <TextInputCommon
            style={{marginHorizontal: 20}}
            placeholder="Mật khẩu"
            icon="lock"
            iconRight={viewPass ? 'eye' : 'eye-slash'}
            secureTextEntry={viewPass}
            onPressIconRight={() => setViewPass(!viewPass)}
            value={form?.pass}
            onPress={(text) => formatText(text, 'pass')}
            iconSize={25}
          />
          <TouchableOpacity
            style={[styles.btn, disable && {opacity: 0.4}]}
            onPress={!disable && onLogin}>
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </TouchableOpacity>
          <Separator />
          <GradientFacebook
            style={{marginTop: 0}}
            title={'Đăng ký'}
            colors={colorsRegister}
          />
          <ModalScreen open={!!error} error={error} onClose={onDismissError} />
        </View>
      </View>
    </View>
  );
}
const mapStateToProps = (state, props) => ({
  isLoading: state.login.isLoading,
  userName: state.login?.data?.email,
  error: state.login?.error,
});
const colorSignup = ['#00A5E0', '#3b5998'];
const colorsRegister = ['#F7E8A4', '#DBAD6A'];
export default connect(mapStateToProps)(LoginScreen);
