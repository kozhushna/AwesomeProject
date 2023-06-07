import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import UserImage from '../Images/User.png';

const CreatePostScreen = () => (
  <View style={styles.container}>
    <Image source={UserImage} />
    <Text style={styles.title}>Natali Romanova</Text>
    <Text style={styles.text}>email@example.com</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 32,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
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

export default CreatePostScreen;
