import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import UserImage from '../Images/User.png';

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.holder}>
        <Image source={UserImage} />
        <View style={styles.textHolder}>
          <Text style={styles.title}>Natali Romanova</Text>
          <Text style={styles.text}>email@example.com</Text>
        </View>
      </View>
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

  holder: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textHolder: {
    flex: 1,
  },

  title: {
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    color: '#212121',
  },

  text: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 13,
    color: 'rgba(33, 33, 33, 0.8)',
  },
});

export default PostsScreen;
