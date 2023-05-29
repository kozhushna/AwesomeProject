import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import PhotoBG from '../Images/PhotoBG.png';

import AvatarHolder from '../Components/AvatarHolder';

const RegistrationScreen = () => (
  <View style={styles.container}>
    <ImageBackground source={PhotoBG} resizeMode="cover" style={styles.image}>
      <AvatarHolder />
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default RegistrationScreen;
