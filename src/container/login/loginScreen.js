import React, {useState, createRef, useRef} from 'react';
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import Animated from 'react-native-reanimated';

import {connect, useDispatch} from 'react-redux';
import CSButton from '../../components/csButton';
import TextInputCommon from '../../components/textInput';
import styles from './styles';
import * as action from '../../redux/action/login/index';
import ModalScreen from '../../components/modal';
import Separator from '../../components/separator';
import {Formik} from 'formik';
import * as Yup from 'yup';
import csColor from '../../utils/csColor';
import RegisterBottomSheet from '../../components/bottomSheet/register';
import Lottie from '../../components/lottie/index';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Trường email là bắt buộc')
    .email('Sai định dạng email'),
  pass: Yup.string()
    .required('Vui lòng nhập mật khẩu')
    .min(6, 'Mật khẩu tối thiếu 6 chữ số'),
});
function LoginScreen({userName, isLoading, error}) {
  const [viewPass, setViewPass] = useState(true);
  const [fall, setFall] = useState(new Animated.Value(1));

  const bs = useRef(null);

  const onPressRegister = () => {
    bs?.current?.snapTo(0);
  };
  const dispatch = useDispatch();
  const onLogin = (values) => {
    dispatch(action.loginWithFireBase(values));
  };
  const onPressChangeViewPass = () => {
    setViewPass(!viewPass);
  };
  const onPressSnapPoint = () => {
    bs.current?.snapTo(0);
  };
  const onDismissError = () => dispatch(action.dismissError());
  return (
    <View style={styles.ctn}>
      <RegisterBottomSheet sheetRef={bs} fall={fall} />
      <ModalScreen
        isLoading={isLoading}
        open={!!error}
        error={error}
        onClose={onDismissError}
      />
      <Animated.View
        style={{opacity: Animated.add(0.3, Animated.multiply(fall, 1.0))}}>
        <Formik
          validationSchema={validationSchema}
          initialValues={{email: userName, pass: ''}}
          onSubmit={(values) => onLogin(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => {
            return (
              <View>
                <TextInputCommon
                  style={{marginHorizontal: 20}}
                  icon="envelope-o"
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values?.email}
                  blurOnSubmit={false}
                  touched={touched.email}
                  // iconSize={20}
                />
                {errors?.email && touched?.email ? (
                  <Text style={styles.txt}>{errors?.email}</Text>
                ) : null}

                <TextInputCommon
                  autoComplete={false}
                  autoCapitalize={'none'}
                  secureTextEntry={viewPass}
                  style={{marginHorizontal: 20}}
                  onPressIconRight={onPressChangeViewPass}
                  placeholder="Mật khẩu"
                  icon={'lock'}
                  onChangeText={handleChange('pass')}
                  onBlur={handleBlur('pass')}
                  value={values?.pass}
                  blurOnSubmit={false}
                  onSubmitEditing={() => onLogin(values)}
                  touched={touched.pass}
                  iconRight={viewPass ? 'eye' : 'eye-slash'}
                />
                {errors?.pass ? (
                  <Text style={styles.txt}>{errors?.pass}</Text>
                ) : null}
                <CSButton title="Đăng nhập" onPress={handleSubmit} />
                <Separator />
                <CSButton
                  title="Đăng ký"
                  onPress={onPressRegister}
                  style={{
                    backgroundColor: csColor.vars.csMariGold,
                    marginTop: 0,
                  }}
                />
              </View>
            );
          }}
        </Formik>
      </Animated.View>
    </View>
  );
}
export default LoginScreen;
