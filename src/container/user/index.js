import React, {createRef, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import {Avatar} from 'react-native-paper';
import TextInputCommon from '../../components/textInput';
import color from '../../utils/csColor';
import modelUser from './model';
import BottomSheetScreen from '../../components/bottomSheet';
function User() {
  const bs = createRef();
  const [fall, setFall] = useState(new Animated.Value(1));
  const [form, setForm] = useState(modelUser);
  const [image, setImage] = useState(
    'https://images.unsplash.com/photo-1602279029118-e7b3ba3fbdb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  );
  const onPressSnapPoint = () => {
    bs.current?.snapTo(0);
    // setFall(new Animated.Value(1));
  };
  const formatText = (text, key) => {
    const newForm = {...form};
    newForm[key] = text;
    return setForm(newForm);
  };
  const avatarView = () => {
    return (
      <TouchableOpacity onPress={onPressSnapPoint} style={styles.avatarCtn}>
        <Avatar.Image
          source={{
            uri: image,
          }}
          theme={{colors: {primary: '#00DAC3'}}}
          size={100}
          color="white"
          label="XD"
        />
      </TouchableOpacity>
    );
  };
  const onPressChooseImage = (path) => {
    bs?.current?.snapTo(1);
    setImage(path);
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <BottomSheetScreen
        sheetRef={bs}
        fall={fall}
        onPressFirst={onPressChooseImage}
      />
      <Animated.View
        style={{opacity: Animated.add(0.3, Animated.multiply(fall, 1.0))}}>
        {avatarView()}

        <TextInputCommon
          placeholder="Họ và tên"
          icon="user-o"
          value={form?.name}
          onPress={(text) => formatText(text, 'name')}
        />
        <TextInputCommon
          placeholder="Ngày sinh"
          icon="calendar-o"
          value={form?.dob}
          onPress={(text) => formatText(text, 'dob')}
        />
        <TextInputCommon
          placeholder="Email"
          icon="envelope-o"
          value={form?.email}
          onPress={(text) => formatText(text, 'email')}
        />
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.btnText}>Đăng ký thông tin</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: color.vars.csSteelBlue,
    borderRadius: 5,
  },
  avatarCtn: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    borderRadius: 10,
    marginTop: 10,
  },
  btnText: {
    paddingVertical: 10,
    fontSize: 16,
    color: color.vars.csWhite,
  },
});
export default User;
