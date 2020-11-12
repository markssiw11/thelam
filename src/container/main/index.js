import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import styles from './styles';
import * as loginAction from '../../redux/action/login';
import LoginScreen from '../login/loginScreen';
import ModalScreen from '../../components/modal';
import BackGround from '../../components/background';
function Main(props) {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginAction.logoutWithFireBase());
  if (!props.rehydrated) {
    return <ModalScreen isLoading={true} />;
  }
  if (props.loginStatus) {
    return <BackGround />;
  } else {
    return <LoginScreen {...props} />;
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.login.isLoading,
  userName: state.login?.data?.email,
  error: state.login?.error,
  loginStatus: state.login.loginStatus,
  rehydrated: state._persist?.rehydrated,
});
export default connect(mapStateToProps)(Main);
