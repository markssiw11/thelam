import * as React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {color} from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
const width = Dimensions.get('window').width;
function BottomSheetScreen({sheetRef, fall, onPressClose}) {
  const onPressCloseBottomSheet = () => {
    console.log('close======');
    // onPressClose();
    sheetRef?.current?.snapTo(1);
  };
  const renderInner = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('onPress=1======1====');
        }}>
        <Text>hello</Text>
      </TouchableOpacity>
    );
  };
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
        alignItems: 'center',
      }}>
      <Text
        style={{fontSize: 24, fontWeight: '600'}}
        onPress={() => {
          console.log('onclose======');
        }}>
        Đổi avatar
      </Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Chọn avatar từ thư viện</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn]}
        onPress={() => {
          console.log('onclose======');
        }}>
        <Text style={styles.btnText}>Chụp ảnh</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn]}
        onPress={() => {
          console.log('onclose======');
          sheetRef?.current?.snapTo(1);
        }}>
        <Text style={styles.btnText}>Đóng</Text>
      </TouchableOpacity>
    </View>
  );
  const renderHeader = () => {
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.panelHeader}>
            <View style={styles.panelHandle}></View>
          </View>
        </View>
        {renderContent()}
      </View>
    );
  };
  return (
    // <>
    <BottomSheet
      ref={sheetRef}
      snapPoints={[330, 0]}
      initialSnap={1}
      borderRadius={10}
      callbackNode={fall}
      enabledGestureInteraction={true}
      // renderContent={renderInner}
      renderHeader={renderHeader}
    />
    // </>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#333333',
    shadowOffset: {
      width: -1,
      height: -3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 2,

    elevation: 5,
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
});
export default BottomSheetScreen;
