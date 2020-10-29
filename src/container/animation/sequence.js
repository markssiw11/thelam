import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  StatusBar,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Animated, {
  Transitioning,
  Transition,
  cond,
} from 'react-native-reanimated';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import csColor from '../../utils/csColor';
function Sequence() {
  const transition = (
    <Transition.Sequence>
      <Transition.Change
        type="scale"
        durationMs={500}
        interpolation="easeInOut"
      />
    </Transition.Sequence>
  );

  let [showText, setShowText] = useState(false);
  const ref = useRef();
  const onPress = () => {
    ref.current.animateNextTransition();
    setShowText(!showText);
  };
  const rotateZ = cond(showText, '45deg', '0deg');
  const touchOption = ({style, icon, onPress}) => {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.iconView, {...style}]}>
        <FontAwesome name={icon} solid size={size / 2} color={'white'} />
      </TouchableOpacity>
    );
  };
  return (
    <Transitioning.View
      ref={ref}
      transition={transition}
      style={[styles.centerAll]}>
      <View style={styles.ctn}>
        {showText && (
          <View style={styles.help}>
            {touchOption({style: {marginBottom: 15}, icon: 'camera'})}
            {touchOption({icon: 'calendar-o'})}
          </View>
        )}
        <Animated.View style={[styles.floatButton, {transform: [{rotateZ}]}]}>
          <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.iconView}>
              <FontAwesome
                name={'plus'}
                solid
                size={size / 2}
                color={'white'}
              />
            </View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </View>
    </Transitioning.View>
  );
}

const size = 50;
const styles = StyleSheet.create({
  centerAll: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    margin: 10,
  },
  ctn: {
    position: 'absolute',
    right: 15,
    bottom: 40,
    flexDirection: 'column',
  },
  floatButton: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom: 4,
    flex: 1,
    height: size,
    paddingRight: 5,
    borderRadius: size / 2,
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F05D23',
    width: size,
    height: size,
    borderRadius: size / 2,
    marginLeft: 2,
  },
  help: {
    marginVertical: 20,
  },
});
{
  /* <Button
title="show or hide"
color="#FF5252"
onPress={() => {
  ref.current.animateNextTransition();
  setShowText(!showText);
}}
/> */
}
export default Sequence;
