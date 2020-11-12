import * as React from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import {Formik} from 'formik';
import * as Yup from 'yup';
import TextInputCommon from '../textInput';
import CSButton from '../csButton';
import * as action from '../../redux/action/login/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import csColor from '../../utils/csColor';
const {width, height} = Dimensions.get('window');
function RegisterBottomSheetScreen({sheetRef, fall, onPressFirst}) {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Trường email là bắt buộc')
      .email('Sai định dạng email'),
    pass: Yup.string()
      .required('Vui lòng nhập mật khẩu')
      .min(6, 'Mật khẩu tối thiểu có 6 kí tự'),
    confirmPass: Yup.string()
      .required('Vui lòng nhập mật khẩu')
      .min(6, 'Mật khẩu tối thiểu có 6 kí tự'),
  });
  const dispatch = useDispatch();
  const onRegister = (values) => {
    // sheetRef?.current?.snapTo(1);

    dispatch(action.registerWithFireBase(values));
  };

  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: height - 10,
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 24, fontWeight: '600'}} onPress={() => {}}>
        Đăng ký thông tin
      </Text>
      <Formik
        validationSchema={validationSchema}
        initialValues={{email: '', pass: '', confirmPass: ''}}
        onSubmit={(values) => onRegister(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => {
          const isSamePass =
            values?.pass === values.confirmPass &&
            !!values.pass &&
            !!values.confirmPass;
          let isInValidPass =
            (!!errors.pass || !values?.pass) && values?.pass.length < 6;
          return (
            <View>
              <TextInputCommon
                style={{marginHorizontal: 20}}
                icon="envelope-o"
                placeholder="Email"
                autoComplete={false}
                value={values?.email}
                autoCapitalize={'none'}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                touched={touched?.email}
              />
              {errors?.email && touched?.email ? (
                <Text style={styles.txt}>{errors?.email}</Text>
              ) : null}
              <TextInputCommon
                style={{marginHorizontal: 20}}
                icon={'lock'}
                autoCapitalize={'none'}
                placeholder="Mật khẩu"
                value={values?.pass}
                secureTextEntry={true}
                autoComplete={false}
                iconRightSize={20}
                autoCorrect={false}
                iconRight={isInValidPass ? 'times-circle' : 'check-circle'}
                iconRightColor={isInValidPass ? 'red' : 'green'}
                onChangeText={handleChange('pass')}
                onBlur={handleBlur('pass')}
                blurOnSubmit={false}
                touched={touched?.pass}
              />
              {errors?.pass && touched?.pass && (
                <Text style={styles.txt}>{errors?.pass}</Text>
              )}
              <TextInputCommon
                style={{marginHorizontal: 20}}
                icon={'lock'}
                autoComplete={false}
                autoCorrect={false}
                autoCapitalize={'none'}
                value={values?.confirmPass}
                placeholder="Nhập lại mật khẩu"
                secureTextEntry={true}
                iconRight={isSamePass ? 'check-circle' : 'times-circle'}
                iconRightSize={20}
                iconRightColor={isSamePass ? 'green' : 'red'}
                onChangeText={handleChange('confirmPass')}
                onBlur={handleBlur('confirmPass')}
                blurOnSubmit={false}
                touched={touched?.confirmPass}
              />
              {errors?.confirmPass && touched?.confirmPass && (
                <Text style={styles.txt}>{errors?.confirmPass}</Text>
              )}
              <CSButton
                title="Đăng ký"
                onPress={handleSubmit}
                style={{
                  backgroundColor: csColor.vars.csMariGold,
                }}
              />
            </View>
          );
        }}
      </Formik>
      <CSButton
        title="Đóng"
        onPress={() => {
          sheetRef?.current?.snapTo(1);
        }}
      />
    </View>
  );
  const renderHeader = () => {
    return (
      <KeyboardAwareScrollView style={styles.ctn}>
        <View style={styles.header}>
          <View style={styles.panelHeader}>
            <View style={styles.panelHandle}></View>
          </View>
        </View>
        {renderContent()}
      </KeyboardAwareScrollView>
    );
  };
  const renderInner = () => {
    return (
      <View>
        <Text>hello</Text>
      </View>
    );
  };
  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[height - 200, 0]}
      initialSnap={1}
      borderRadius={10}
      callbackNode={fall}
      enabledGestureInteraction={true}
      renderHeader={renderHeader}
      renderInner={renderInner}
    />
  );
}
const styles = StyleSheet.create({
  ctn: {
    shadowColor: '#333333',
    shadowOffset: {
      width: -1,
      height: -3,
    },
    paddingTop: 10,
    shadowOpacity: 0.6,
    shadowRadius: 2,
    marginTop: 10,
    elevation: 5,
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'grey',
  },
  btn: {
    backgroundColor: '#ff6347',
    width: width - 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 40,
    marginVertical: 5,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 16,
  },
  txt: {
    color: csColor.vars.csTomato,
    marginLeft: 20,
  },
});
export default RegisterBottomSheetScreen;
