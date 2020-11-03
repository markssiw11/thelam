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
    width: DEVICE_SCREEN_WIDTH - 20,
    overflow: 'hidden',
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
  },
  ctn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
