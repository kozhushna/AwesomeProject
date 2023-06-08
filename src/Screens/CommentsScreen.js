import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  VirtualizedList,
} from 'react-native';
import Sea from '../Images/Sea.jpg';

const COMMENTS = [
  {
    id: '1',
    image: require('../Images/Avatar.png'),
    text: 'Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
    date: '09 червня, 2020 | 08:40',
  },
  {
    id: '2',
    image: require('../Images/MainAvatar.png'),
    text: 'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
    date: '09 червня, 2020 | 08:40',
  },
  {
    id: '3',
    image: require('../Images/Avatar.png'),
    text: 'Thank you! That was very helpful!',
    date: '09 червня, 2020 | 09:20',
  },
];

const CommentScreen = () => {
  const [comments, setComments] = useState(COMMENTS);

  const renderItem = (item) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  );

  const getItem = (_data, index) => {
    const entity = comments[index];
    return {
      id: entity.id,
      text: entity.text,
      image: entity.image,
      date: entity.date,
    };
  };

  const getItemCount = (_data) => comments.length;

  return (
    <View style={styles.container}>
      <Image source={Sea} />
      <SafeAreaView style={styles.mainContainer}>
        <VirtualizedList
          data={comments}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item) => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingBottom: 32,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },

  itemContainer: {
    paddingHorizontal: 8,
    marginBottom: 32,
  },

  holder: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },

  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CommentScreen;
