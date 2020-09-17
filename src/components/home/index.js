import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
function Home() {
  const renderNavBar = () => {
    return <View style={styles.navBar}></View>;
  };
  return (
    <View style={{flex: 1}}>
      {renderNavBar()}
      <Text>hello world</Text>
      <Icon name="rocket" color="#eee" size={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'white',
    height: 80,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
  },
});
export default Home;
