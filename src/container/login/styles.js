import {StyleSheet} from 'react-native';
import csColor from '../../utils/csColor';
import {DEVICE_SCREEN_WIDTH} from '../../utils/deviceHelper';
const styles = StyleSheet.create({
  btn: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: csColor.vars.csSteelBlue,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
    width: DEVICE_SCREEN_WIDTH - 40,
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
    color: csColor.vars.csWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: csColor.vars.csBackground,
  },
  loginCtn: {
    backgroundColor: csColor.vars.csWhite,
    marginHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: DEVICE_SCREEN_WIDTH - 20,
    height: DEVICE_SCREEN_WIDTH * 1.1,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  registerCtn: {
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
    width: DEVICE_SCREEN_WIDTH - 40,
    backgroundColor: csColor.vars.csDeepChampagne,
  },
  headerTxt: {
    fontSize: 28,
  },
  headerCtn: {
    flex: 1 / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginInput: {
    flex: 3 / 4,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Cochin',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    // backgroundColor: 'transparent',
  },
  txtInput: {
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    height: 40,
    width: DEVICE_SCREEN_WIDTH - 40,
    borderColor: '#a9a9a9',
  },
  txt: {
    color: csColor.vars.csTomato,
    marginLeft: 20,
  },
});
export default styles;
