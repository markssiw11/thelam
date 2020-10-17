import * as React from 'react';
import {StyleSheet, Text, View, Dimensions, Platform} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BottomSheet from 'reanimated-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';
const width = Dimensions.get('window').width;
function BottomSheetScreen({sheetRef, fall, onPressFirst}) {
  const openImage = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then((images) => {
      cloudinaryUpload(images);
    });
  };
  const cloudinaryUpload = (photo) => {
    const data = new FormData();
    data.append('api_key', '754195751163448');
    const newPhoto = photo[0];
    let fileUri = newPhoto.uri || newPhoto.path;
    // if (fileUri === newPhoto.path && !fileUri.startsWith('file://')) {
    //   fileUri = `file://${fileUri}`;
    // }
    fileUri =
      Platform.OS == 'ios' ? fileUri.replace('file://', '/private') : photo.uri;
    data.append('file', {
      name: newPhoto.filename,
      uri: fileUri,
      size: newPhoto.size,
      type: newPhoto.mime,
    });
    data.append('upload_preset', 'thelam');
    data.append('cloud_name', 'thelam');
    console.log('data 1=====', data);

    fetch('https://api.cloudinary.com/v1_1/dlitgelel/image/upload', {
      method: 'post',
      body: data,
    })
      .then((data) => data.json())
      .then((res) => {
        console.log('res======', res);
      })
      .catch((error) => {
        console.log('error===', error);
      });
  };
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      onPressFirst(image[0]?.path);
    });
  };
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 24, fontWeight: '600'}} onPress={() => {}}>
        Đổi avatar
      </Text>
      <TouchableOpacity style={styles.btn} onPress={openImage}>
        <Text style={styles.btnText}>Chọn avatar từ thư viện</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn]} onPress={openCamera}>
        <Text style={styles.btnText}>Chụp ảnh</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn]}
        onPress={() => {
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
