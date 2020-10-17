import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import csColor from '../../utils/csColor';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import dataBook from '../../../assets/data/book.json';
import HeaderView from '../header';
import Category from '../category';

function PopularBook() {
  const newData = [dataBook[12], dataBook[8], dataBook[11]];
  const renderItem = ({item, index}) => {
    const authors = item.authors;
    return (
      <View key={`${index} - ${item.pageCount}`} style={styles.itemCtn}>
        <Image style={styles.image} source={{uri: item.thumbnailUrl}} />
        <View style={styles.descriptionCtn}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.authors}>{authors.join('-')}</Text>
          <Text style={styles.txtMain} numberOfLines={5}>
            {item.shortDescription}
          </Text>
        </View>
      </View>
    );
  };
  const renderSeperator = () => <View style={styles.divider} />;
  const renderBookView = () => {
    return (
      <FlatList
        ListHeaderComponent={
          <>
            <HeaderView />
            <Category />
            <View style={styles.txtCtn}>
              <Text style={styles.headerTxt}>Phổ biến</Text>
            </View>
          </>
        }
        data={newData}
        keyExtractor={(item, index) => `${item.id} - ${index}`}
        ItemSeparatorComponent={renderSeperator}
        renderItem={renderItem}
      />
    );
  };
  return <View style={styles.ctn}>{renderBookView()}</View>;
}

export default PopularBook;
