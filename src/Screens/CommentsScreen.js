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

  const renderItem = (item, index) => (
    <View
      style={[
        styles.commentContainer,
        index % 2 === 0 ? styles.evenRow : styles.oddRow,
      ]}
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
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
      <Image source={Sea} style={styles.image} />
      <SafeAreaView style={styles.mainContainer}>
        <VirtualizedList
          data={comments}
          renderItem={({ item, index }) => renderItem(item, index)}
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

  commentContainer: {
    // paddingHorizontal: 8,
    marginBottom: 32,
    // flex: 0,
    width: 343,

    alignItems: 'flex-start',
    gap: 16,
  },

  evenRow: {
    flexDirection: 'row',
  },

  oddRow: {
    flexDirection: 'row-reverse',
  },

  mainContainer: {
    height: '100%',
    minHeight: 70,
    flex: 0,
    gap: 24,
  },

  contentContainer: {
    flex: 0,
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 'auto',
    gap: 8,
  },

  textContainer: {
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 'auto',
    flexDirection: 'row',
  },

  text: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 18,
  },
});

export default CommentScreen;
