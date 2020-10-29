import {StyleSheet} from 'react-native';
import csColor from '../../utils/csColor';
const styles = StyleSheet.create({
  ctn: {
    flex: 1,
    backgroundColor: csColor.vars.csBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    borderWidth: 0.5,
    borderColor: csColor.vars.csCadetblue,
    borderRadius: 10,
  },
  txtBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
export default styles;
