import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderView from '../header';
import color from '../../utils/color';
import DrawerScreen from '../drawer';
import HomeAction from '../../redux/action/home/index';
function Home({navigation, isLoading, thang}) {
  const [open, setOpen] = useState(false);
  const onPress = () => {
    setOpen(!open);
  };
  useEffect(() => {
    HomeAction.getHome();
  });
  const searchView = () => {
    return (
      <View style={styles.searchCtn}>
        <Icon
          style={{
            paddingLeft: 10,
            paddingTop: 3,
          }}
          name="search"
          color="white"
          size={20}
        />
        <TextInput style={styles.textInput} placeholder="Tìm kiếm sách" />
      </View>
    );
  };
  const vipIconOnPress = () => {};
  const vipIcon = () => {
    return (
      <TouchableOpacity style={styles.vipCtn} onPress={vipIconOnPress}>
        <Image
          style={styles.vip}
          source={require('../../../assets/image/vip1.png')}
        />
      </TouchableOpacity>
    );
  };
  const renderNavBar = () => {
    return (
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navIcon} onPress={onPress}>
          <Icon name="list" color={color.vars.dimgray} size={30} />
        </TouchableOpacity>
        {searchView()}
        {vipIcon()}
      </View>
    );
  };
  const renderNavDrawer = () => {
    return <DrawerScreen open={open} onPress={onPress} />;
  };

  return (
    <View style={{flex: 1}}>
      {renderNavDrawer()}
      {renderNavBar()}
      <HeaderView />
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'white',
    height: 90,
    borderBottomWidth: 0.5,
    borderColor: color.vars.gainsboro,
    flexDirection: 'row',
    position: 'relative',
  },
  navIcon: {
    paddingTop: 50,
    paddingLeft: 20,
  },
  searchCtn: {
    marginTop: 50,
    flexDirection: 'row',
    flex: 1,
    borderWidth: 0.5,
    borderColor: color.vars.dimgray,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    backgroundColor: color.vars.gainsboro,
  },
  textInput: {
    paddingLeft: 20,
    flex: 1,
    alignSelf: 'center',
    paddingVertical: 5,
  },
  vip: {
    width: 40,
    height: 30,
    marginRight: 10,
  },
  vipCtn: {
    marginTop: 50,
  },
});
const mapStateToProps = (state, props) => ({
  isLoading: state.home.isLoading,
  thang: state.home.thang,
});
export default connect(mapStateToProps)(Home);
