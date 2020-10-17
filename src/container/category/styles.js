import {StyleSheet} from 'react-native';
import csColor from '../../utils/csColor';
import csStyles from '../../utils/csStyles';
import {DEVICE_SCREEN_WIDTH} from '../../utils/deviceHelper';
const sizeIcon = 30;

const styles = StyleSheet.create({
  ctn: {
    // flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 5,
    ...csStyles.base.shadow,
    shadowOffset: {
      width: 1,
      height: 2,
    },
  },
  header: {
    fontSize: 32,
    fontWeight: '600',
    marginHorizontal: 10,
    marginTop: 10,
    color: csColor.vars.csDodgerblue,
  },
  column: {
    justifyContent: 'center',
  },
  row: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  typeCtn: {
    backgroundColor: csColor.vars.csCadetblue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: (DEVICE_SCREEN_WIDTH - 50) / 3,
    ...csStyles.base.shadow,
  },
  typeText: {
    color: csColor.vars.csWhite,
  },
  moreCtn: {
    marginVertical: 10,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginHorizontal: 5,
    ...csStyles.base.shadow,
  },
  moreViewText: {fontSize: 8, color: csColor.vars.csCadetblue},
  chevron: {
    height: sizeIcon,
    width: sizeIcon,
    borderRadius: sizeIcon / 2,
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
    right: 10,
    backgroundColor: csColor.vars.csSubmit,
  },
  headerCtn: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
export default styles;
