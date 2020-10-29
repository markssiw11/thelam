import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import csColor from '../../utils/csColor';
import Icon from 'react-native-vector-icons/FontAwesome';
import categoryData from '../../../assets/data/category.json';
import styles from './styles';
import Animated, {cond} from 'react-native-reanimated';
function Category({navigation}) {
  const [open, setOpen] = useState(false);
  const onPress = (i) => {
    console.log('i=======', i);
    switch (i) {
      case 0:
        navigation?.navigate('slider');
        break;
      case 1:
        navigation?.navigate('slider');
        break;
      default:
        break;
    }
  };
  const renderRow = (data = []) => {
    return (
      <View style={styles.row}>
        {data.map((e, i) => (
          <TouchableOpacity
            key={e.id}
            style={styles.typeCtn}
            onPress={() => onPress(i)}>
            <Text style={styles.typeText}>{e?.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const onPressMore = () => {
    setOpen(!open);
  };
  const renderMoreView = () => {
    return (
      <TouchableOpacity style={styles.moreCtn} onPress={onPressMore}>
        {open ? (
          <>
            <Text style={styles.moreViewText}>Thu gọn</Text>
            <View style={{flexDirection: 'row', top: 3}}>
              {[1, 2, 3].map((e) => (
                <Icon
                  key={e}
                  name="circle"
                  size={5}
                  color={csColor.vars.csCadetblue}
                  style={{paddingHorizontal: 5}}
                />
              ))}
            </View>
          </>
        ) : null}
      </TouchableOpacity>
    );
  };
  const height = cond(open, 'auto', 0);
  const opacity = open ? 1 : 0;
  const rotateZ = cond(open, '90deg', '0deg');
  const bottom = open ? 1 : 0;
  return (
    <Animated.View style={styles.ctn}>
      <View style={styles.headerCtn}>
        <Text style={styles.header}>Thể loại</Text>
        <TouchableOpacity onPress={onPressMore}>
          <Animated.View style={[styles.chevron, {transform: [{rotateZ}]}]}>
            <Icon style={{bottom}} name="chevron-up" color="white" />
          </Animated.View>
        </TouchableOpacity>
      </View>
      <View style={[styles.column]}>
        {renderRow(categoryData['first'])}
        {renderRow(categoryData['second'])}
      </View>
      <Animated.View style={[styles.column, {height, opacity}]}>
        {renderRow(categoryData['third'])}
        {renderRow(categoryData['fourth'])}
      </Animated.View>
      {renderMoreView()}
    </Animated.View>
  );
}
export default Category;
