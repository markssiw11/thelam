import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Lottie from '../../components/lottie/index';
import LottieView from 'lottie-react-native';

import {
  DEVICE_SCREEN_WIDTH,
  DEVICE_SCREEN_HEIGHT,
} from '../../utils/deviceHelper';
const ModalScreen = (props) => {
  const {open, isLoading, error, title} = props;
  if (isLoading) {
    return <Lottie isLoading={true} />;
  }
  const renderContent = () => {
    return (
      <View style={styles.centeredView}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{title || 'Thông báo'}</Text>

            <Text style={styles.modalText}>{error}</Text>

            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                props.onClose();
              }}>
              <Text style={styles.textStyle}>Đóng</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={() => {}}>
      {open && renderContent()}
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 22,
  },
  modalView: {
    width: 300,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  ctn: {
    flex: 1,
    position: 'absolute',
    width: DEVICE_SCREEN_WIDTH,
    height: DEVICE_SCREEN_HEIGHT,
    backgroundColor: 'rgba(88, 101, 94, 0.4)',
    overflow: 'visible',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ModalScreen;
