import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

// setInterval(() => {
//   let iters = 1e8,
//     sum = 0;
//   while (iters-- > 0) sum += iters;
// }, 300);

const {
  set,
  cond,
  eq,
  add,
  multiply,
  lessThan,
  spring,
  startClock,
  stopClock,
  clockRunning,
  sub,
  defined,
  Value,
  Clock,
  event,
} = Animated;

function runSpring(clock, value, velocity, dest) {
  const state = {
    finished: new Value(0),
    velocity: new Value(0),
    position: new Value(0),
    time: new Value(0),
  };

  const config = {
    damping: 7,
    mass: 1,
    stiffness: 121.6,
    overshootClamping: false,
    restSpeedThreshold: 0.001,
    restDisplacementThreshold: 0.001,
    toValue: new Value(0),
  };

  return [
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.velocity, velocity),
      set(state.position, value),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    spring(clock, state, config),
    cond(state.finished, stopClock(clock)),
    state.position,
  ];
}

class Snappable extends Component {
  constructor(props) {
    super(props);

    const TOSS_SEC = 0.2;

    const dragY = new Value(0);
    const state = new Value(-1);
    const dragVY = new Value(0);

    this._onGestureEvent = event([
      {nativeEvent: {translationY: dragY, velocityX: dragVY, state: state}},
    ]);

    const transY = new Value();
    const prevDragY = new Value(0);

    const clock = new Clock();

    const snapPoint = cond(
      lessThan(add(transY, multiply(TOSS_SEC, dragVY)), 0),
      -100,
      100,
    );

    this._transY = cond(
      eq(state, State.ACTIVE),
      [
        stopClock(clock),
        set(transY, add(transY, sub(dragY, prevDragY))),
        set(prevDragY, dragY),
        transY,
      ],
      [
        set(prevDragY, 0),
        set(
          transY,
          cond(defined(transY), runSpring(clock, transY, dragVY, snapPoint), 0),
        ),
      ],
    );
  }
  render() {
    const {children, ...rest} = this.props;
    return (
      <PanGestureHandler
        {...rest}
        maxPointers={1}
        minDist={10}
        onGestureEvent={this._onGestureEvent}
        onHandlerStateChange={this._onGestureEvent}>
        <Animated.View style={{transform: [{translateY: this._transY}]}}>
          {children}
        </Animated.View>
      </PanGestureHandler>
    );
  }
}

export default class Example extends Component {
  static navigationOptions = {
    title: 'Snappable Example',
  };
  render() {
    return (
      <View style={styles.container}>
        <Snappable>
          <View style={styles.box} />
        </Snappable>
      </View>
    );
  }
}

const BOX_SIZE = 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  box: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    borderRadius: BOX_SIZE / 2,
    borderColor: '#F5FCFF',
    alignSelf: 'center',
    backgroundColor: 'plum',
    margin: BOX_SIZE / 2,
  },
});
