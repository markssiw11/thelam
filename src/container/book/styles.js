import {StyleSheet} from 'react-native';
import csColor from '../../utils/csColor';
import csStyles from '../../utils/csStyles';
import {DEVICE_SCREEN_WIDTH} from '../../utils/deviceHelper';
const sizeIcon = 30;

const styles = StyleSheet.create({
  headerTxt: {
    fontSize: 32,
    fontWeight: '600',
    marginHorizontal: 10,
    marginVertical: 10,
    color: csColor.vars.csDodgerblue,
  },
  ctn: {
    backgroundColor: csColor.vars.csBackground,
    marginBottom: 40,
    borderRadius: 5,
  },
  image: {
    width: 130,
    height: 180,
    borderRadius: 10,
    marginLeft: 5,
    marginVertical: 10,
  },
  itemCtn: {
    flexDirection: 'row',
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: csColor.vars.white,
    marginVertical: 10,
    ...csStyles.base.shadow,
  },
  divider: {
    height: 1,
    backgroundColor: '#E1E1E1',
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  authors: {
    fontSize: 12,
    fontWeight: '200',
  },
  descriptionCtn: {
    marginHorizontal: 10,
    marginTop: 10,
    paddingRight: 10,
    flex: 1,
  },
  txtMain: {
    marginTop: 6,
  },
  txtCtn: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 5,
    ...csStyles.base.shadow,
    shadowOffset: {
      width: -1,
      height: -3,
    },
    marginTop: 10,
  },
});

export default styles;
