import React, {PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import csColor from '../../utils/csColor';
class Separator extends PureComponent {
  render() {
    return (
      <View style={styles.ctn}>
        <View style={styles.line} />
        <Text style={styles.txt}>Hoặc</Text>
        <View style={styles.line} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ctn: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  line: {
    backgroundColor: csColor.vars.gainsboro,
    flex: 1 / 3,
    height: 0.5,
  },
  txt: {
    paddingHorizontal: 10,
  },
});
export default Separator;
