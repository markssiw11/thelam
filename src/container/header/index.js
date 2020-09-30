import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import color from '../../utils/color';
import Lottie from '../../components/lottie/index';
import {connect} from 'react-redux';
import HomeAction from '../../redux/action/home/index';

const sliderWidth = Dimensions.get('window').width;
const sliderHight = Dimensions.get('window').height / 4;
const itemWidth = sliderWidth;

function HeaderView({isLoading}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Image
          source={item.source}
          style={{width: itemWidth, height: sliderHight - 30}}
        />
      </View>
    );
  };
  const onScroll = ({nativeEvent}) => {
    const {contentOffset} = nativeEvent;
    const {y} = contentOffset;
    setOffsetY(y);
    // HomeAction.onRefresh();
  };
  const pagination = () => {
    return (
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          marginTop: sliderHight - 80,
          flex: 1,
          alignSelf: 'flex-end',
          position: 'absolute',
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: color.vars.white,
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.5}
        inactiveDotScale={0.6}
      />
    );
  };
  let progress = 0;
  let autoPlay = false;
  const refreshingHeight = 100;
  if (offsetY < 0) {
    // progress = -offsetY / refreshingHeight;
    autoPlay = true;
  }
  return (
    <ScrollView
      style={{flex: 1}}
      // refreshControl={<RefreshControl refreshing={true} />}
      onScroll={onScroll}>
      <Lottie
        progress={progress}
        refreshingHeight={refreshingHeight}
        autoPlay={autoPlay}
      />
      <Carousel
        layout={'default'}
        layoutCardOffset={18}
        ref={(c) => {
          // console.log('C======', c);
          // this._carousel = c;
        }}
        windowSize={1}
        loop={true}
        useScrollView={true}
        onSnapToItem={(index) => setActiveSlide(index)}
        activeAnimationType={'decay'}
        data={data}
        autoplay={true}
        autoplayInterval={3000}
        renderItem={_renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
      {pagination()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  slide: {
    backgroundColor: '#ffe4c4',
  },
  title: {
    color: 'blue',
    textAlign: 'center',
  },
});
const data = [
  {title: 'Nguyen Van A', source: require('../../../assets/image/book1.jpg')},
  {title: 'Nguyen Van B', source: require('../../../assets/image/book2.jpg')},
  {title: 'Nguyen Van c', source: require('../../../assets/image/book3.jpg')},
  {title: 'Nguyen Van D', source: require('../../../assets/image/book6.jpg')},
];
const mapStateToProps = (state, props) => ({
  isLoading: state.home.isLoading,
});
export default connect(mapStateToProps)(HeaderView);
